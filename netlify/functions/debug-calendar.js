const { google } = require('googleapis');

exports.handler = async (event) => {
  const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };
  const result = {
    hasServiceAccountJSON: !!process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
    impersonate: process.env.GOOGLE_IMPERSONATE || 'NOT SET',
    authTest: null, calendarTest: null, error: null,
  };

  try {
    const saKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    result.serviceAccountEmail = saKey.client_email;
    result.projectId = saKey.project_id;

    const auth = new google.auth.JWT({
      email: saKey.client_email,
      key: saKey.private_key,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
      subject: process.env.GOOGLE_IMPERSONATE || 'hello@staelfogarty.com',
    });

    await auth.authorize();
    result.authTest = 'SUCCESS';

    // Use calendar with explicit quota project header
    const cal = google.calendar({
      version: 'v3',
      auth,
      headers: { 'x-goog-user-project': saKey.project_id },
    });

    const now = new Date();
    const res = await cal.freebusy.query({
      requestBody: {
        timeMin: now.toISOString(),
        timeMax: new Date(now.getTime() + 7*24*60*60*1000).toISOString(),
        timeZone: 'America/New_York',
        items: [{ id: process.env.GOOGLE_IMPERSONATE || 'hello@staelfogarty.com' }],
      }
    });
    result.calendarTest = 'SUCCESS';
    result.busySlots = res.data.calendars?.[process.env.GOOGLE_IMPERSONATE]?.busy?.length || 0;
  } catch(e) {
    result.error = e.message;
    result.errorCode = e.code;
  }

  return { statusCode: 200, headers, body: JSON.stringify(result, null, 2) };
};
