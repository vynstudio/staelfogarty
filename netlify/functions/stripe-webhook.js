// Stripe webhook — fires after payment succeeds
// Creates Zoom meeting + sends confirmation emails automatically
//
// Setup in Stripe Dashboard:
//   Developers → Webhooks → Add endpoint
//   URL: https://staelfogarty.com/.netlify/functions/stripe-webhook
//   Events: checkout.session.completed
//
// Netlify env vars:
//   STRIPE_SECRET_KEY      — already set
//   STRIPE_WEBHOOK_SECRET  — from Stripe webhook dashboard (whsec_...)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;
  try {
    if (webhookSecret) {
      stripeEvent = stripe.webhooks.constructEvent(event.body, sig, webhookSecret);
    } else {
      // Dev mode — no signature verification
      stripeEvent = JSON.parse(event.body);
    }
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;
    const meta = session.metadata || {};

    const bookingData = {
      service:   meta.service    || 'Session',
      price:     meta.price      || '0',
      unit:      meta.unit       || 'hr',
      date:      meta.date       || '',
      time:      meta.time       || '',
      fname:     meta.fname      || '',
      lname:     meta.lname      || '',
      email:     meta.client_email || session.customer_email || '',
      phone:     meta.client_phone || '',
      notes:     meta.notes      || '',
      sessionId: session.id,
    };

    console.log('Payment confirmed for:', bookingData.service, '—', bookingData.fname, bookingData.lname);

    // Call our Zoom + notification function
    try {
      const baseUrl = process.env.URL || 'https://staelfogarty.com';
      const res = await fetch(`${baseUrl}/.netlify/functions/create-zoom-meeting`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      const result = await res.json();
      console.log('Zoom + email result:', JSON.stringify(result));
    } catch (err) {
      console.error('Failed to trigger Zoom/email:', err.message);
    }
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
