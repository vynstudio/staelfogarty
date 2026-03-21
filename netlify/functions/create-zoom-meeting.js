// Creates a Zoom meeting via Zoom API (Server-to-Server OAuth)
// and sends confirmation emails with the link to both Stael and the client.
//
// Netlify env vars needed:
//   ZOOM_ACCOUNT_ID        — from Zoom Marketplace app (Server-to-Server OAuth)
//   ZOOM_CLIENT_ID         — from Zoom Marketplace app
//   ZOOM_CLIENT_SECRET     — from Zoom Marketplace app
//   ZOOM_USER_ID           — Stael's Zoom user ID or email (e.g. hello@staelfogarty.com)
//   RESEND_API_KEY         — for sending confirmation emails (free tier at resend.com)
//   STAEL_EMAIL            — hello@staelfogarty.com

const VIRTUAL_SERVICES = ['Virtual Session', 'Language Coaching'];

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

  try {
    const data = JSON.parse(event.body);
    const { service, price, date, time, fname, lname, email, notes, sessionId } = data;
    const clientName = `${fname} ${lname}`;
    const isVirtual = VIRTUAL_SERVICES.includes(service);

    let zoomLink = null;
    let zoomMeetingId = null;

    // ── Step 1: Create Zoom meeting (virtual services only) ──
    if (isVirtual && process.env.ZOOM_ACCOUNT_ID) {
      try {
        // Get OAuth access token
        const tokenRes = await fetch(
          `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
          {
            method: 'POST',
            headers: {
              'Authorization': 'Basic ' + Buffer.from(`${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`).toString('base64'),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        const tokenData = await tokenRes.json();
        const accessToken = tokenData.access_token;

        // Parse date/time into ISO format for Zoom
        const startTime = parseDateTime(date, time);

        // Determine duration from service
        const duration = service === 'Language Coaching' ? 60 : 90;

        // Create the meeting
        const meetingRes = await fetch(
          `https://api.zoom.us/v2/users/${process.env.ZOOM_USER_ID || 'me'}/meetings`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              topic: `${service} — ${clientName}`,
              type: 2, // Scheduled meeting
              start_time: startTime,
              duration: duration,
              timezone: 'America/New_York',
              agenda: `${service} session with ${clientName}.\n${notes ? 'Notes: ' + notes : ''}`,
              settings: {
                host_video: true,
                participant_video: true,
                join_before_host: false,
                waiting_room: true,
                auto_recording: 'none',
              },
            }),
          }
        );

        const meetingData = await meetingRes.json();
        if (meetingData.join_url) {
          zoomLink = meetingData.join_url;
          zoomMeetingId = meetingData.id;
          console.log('Zoom meeting created:', zoomMeetingId, zoomLink);
        } else {
          console.error('Zoom meeting creation failed:', JSON.stringify(meetingData));
        }
      } catch (zoomErr) {
        console.error('Zoom API error:', zoomErr.message);
        // Don't fail the whole function — just log it
      }
    }

    // ── Step 2: Build Google Calendar link ──
    const gcalLink = buildGoogleCalendarLink({
      service, clientName, date, time,
      zoomLink, notes, isVirtual,
    });

    // ── Step 3: Build email content ──
    const zoomSection = zoomLink
      ? `\nZOOM LINK: ${zoomLink}\nMeeting ID: ${zoomMeetingId}\n`
      : isVirtual
        ? '\nZoom link: Stael will send this before your session.\n'
        : '';

    const staelEmail = process.env.STAEL_EMAIL || 'hello@staelfogarty.com';

    const staelBody = `
Hi Stael,

New booking confirmed and paid!

SERVICE: ${service}
CLIENT: ${clientName}
EMAIL: ${email}
DATE: ${date}
TIME: ${time} ET
PRICE: $${price}
${zoomSection}
NOTES: ${notes || 'None'}
STRIPE SESSION: ${sessionId || 'N/A'}

Add to Google Calendar: ${gcalLink}

— staelfogarty.com
    `.trim();

    const clientBody = `
Hi ${fname},

Your session with Stael Fogarty is confirmed!

SERVICE: ${service}
DATE: ${date}
TIME: ${time} ET
PRICE: $${price}
${zoomSection}
${isVirtual && zoomLink ? 'Click the Zoom link above to join your session at the scheduled time.' : isVirtual ? 'Stael will send you a Zoom link before your session.' : 'Stael will meet you in person. She will confirm the location details with you.'}

Add to your Google Calendar: ${gcalLink}

CANCELLATION POLICY:
- Free cancellation up to 24 hours before your session
- Contact hello@staelfogarty.com to reschedule or cancel

Thank you for booking with Stael Fogarty!

— staelfogarty.com
    `.trim();

    // ── Step 4: Send emails via Resend ──
    let emailsSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: 'Stael Fogarty <noreply@staelfogarty.com>',
          to: staelEmail,
          subject: `New Booking: ${service} — ${clientName}`,
          text: staelBody,
        });

        await resend.emails.send({
          from: 'Stael Fogarty <noreply@staelfogarty.com>',
          to: email,
          subject: `Your session is confirmed — ${service} with Stael Fogarty`,
          text: clientBody,
        });

        emailsSent = true;
        console.log('Emails sent via Resend');
      } catch (emailErr) {
        console.error('Email error:', emailErr.message);
      }
    } else {
      // Log for now
      console.log('=== STAEL EMAIL ===\n', staelBody);
      console.log('=== CLIENT EMAIL ===\n', clientBody);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        zoomLink,
        zoomMeetingId,
        gcalLink,
        emailsSent,
        isVirtual,
      }),
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

// ── Helpers ──

function parseDateTime(dateStr, timeStr) {
  // dateStr: "Tue, Mar 24" or "Tue, Mar 24, 2026"
  // timeStr: "9:00 AM"
  try {
    const year = new Date().getFullYear();
    const combined = `${dateStr.replace(/^[A-Za-z]+,\s*/, '')} ${year} ${timeStr}`;
    const d = new Date(combined);
    if (!isNaN(d)) return d.toISOString().replace('.000Z', 'Z');
  } catch (e) {}
  return new Date().toISOString();
}

function buildGoogleCalendarLink({ service, clientName, date, time, zoomLink, notes, isVirtual }) {
  try {
    const year = new Date().getFullYear();
    const combined = `${date.replace(/^[A-Za-z]+,\s*/, '')} ${year} ${time}`;
    const start = new Date(combined);
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    const fmt = d => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const title = encodeURIComponent(`${service} — Stael Fogarty`);
    const details = encodeURIComponent(
      [
        zoomLink ? `Zoom: ${zoomLink}` : isVirtual ? 'Zoom link to be sent by Stael' : 'In-person session',
        `Client: ${clientName}`,
        notes ? `Notes: ${notes}` : '',
        'hello@staelfogarty.com',
        'staelfogarty.com',
      ].filter(Boolean).join('\n')
    );
    const location = encodeURIComponent(zoomLink || 'Orlando, FL');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&details=${details}&location=${location}`;
  } catch (e) {
    return 'https://calendar.google.com';
  }
}
