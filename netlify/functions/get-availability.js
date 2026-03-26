const { google } = require('googleapis');

const TIME_SLOTS = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
const DAYS_AHEAD = 21;
const TIMEZONE = 'America/New_York';

exports.handler = async (event) => {
  const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS' };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
      return { statusCode: 200, headers, body: JSON.stringify({ availability: getMock(), source: 'mock' }) };
    }

    const saKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const calendarId = process.env.GOOGLE_IMPERSONATE || 'hello@staelfogarty.com';

    const auth = new google.auth.JWT({
      email: saKey.client_email,
      key: saKey.private_key,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
      subject: calendarId,
    });
    await auth.authorize();

    const calendar = google.calendar({ version: 'v3', auth });
    const now = new Date();
    const timeMax = new Date(now.getTime() + DAYS_AHEAD * 24 * 60 * 60 * 1000);

    const res = await calendar.freebusy.query({
      requestBody: {
        timeMin: now.toISOString(),
        timeMax: timeMax.toISOString(),
        timeZone: TIMEZONE,
        items: [{ id: calendarId }],
      }
    });

    const busy = res.data.calendars[calendarId]?.busy || [];
    const availability = {};

    let d = new Date(now);
    d.setDate(d.getDate() + 1);
    d.setHours(0, 0, 0, 0);

    for (let i = 0; i < DAYS_AHEAD; i++) {
      const dow = d.getDay();
      if (dow !== 0) { // Skip Sundays
        const dateKey = d.toISOString().split('T')[0];
        const label = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: TIMEZONE });
        const freeSlots = TIME_SLOTS.filter(slot => {
          const [time, ampm] = slot.split(' ');
          let [h, m] = time.split(':').map(Number);
          if (ampm === 'PM' && h !== 12) h += 12;
          if (ampm === 'AM' && h === 12) h = 0;
          const slotStart = new Date(`${dateKey}T${String(h).padStart(2,'0')}:00:00-05:00`);
          const slotEnd = new Date(slotStart.getTime() + 60 * 60000);
          return !busy.some(b => new Date(b.start) < slotEnd && new Date(b.end) > slotStart);
        });
        if (freeSlots.length > 0) availability[dateKey] = { label, slots: freeSlots };
      }
      d.setDate(d.getDate() + 1);
    }

    return { statusCode: 200, headers, body: JSON.stringify({ availability, source: 'google' }) };

  } catch (err) {
    console.error('Calendar error:', err.message);
    return { statusCode: 200, headers, body: JSON.stringify({ availability: getMock(), source: 'fallback', error: err.message }) };
  }
};

function getMock() {
  const availability = {};
  let d = new Date();
  d.setDate(d.getDate() + 1);
  for (let i = 0; i < DAYS_AHEAD; i++) {
    if (d.getDay() !== 0) {
      const key = d.toISOString().split('T')[0];
      const label = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      availability[key] = { label, slots: TIME_SLOTS };
    }
    d.setDate(d.getDate() + 1);
  }
  return availability;
}
