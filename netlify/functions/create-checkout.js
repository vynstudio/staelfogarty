const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
    const { service, price, unit, date, time, fname, lname, email, phone, notes } = data;

    if (!service || !price || !email || !fname) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const staelAccountId = process.env.STAEL_STRIPE_ACCOUNT_ID || 'acct_1TEwhkRxG91XHPAc';
    const commissionAmount = Math.round(price * 100 * 0.20);

    // 3% processing fee passed to client
    const processingFeeRate = 0.03;
    const processingFee = Math.round(price * 100 * processingFeeRate);
    const totalAmount = price * 100 + processingFee;

    // Always use Connect split — her account is now fully enabled
    const sessionParams = {
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: service,
              description: `${service} — ${date} at ${time} ET`,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Processing Fee',
              description: '3% payment processing fee',
            },
            unit_amount: processingFee,
          },
          quantity: 1,
        },
      ],
      metadata: {
        service,
        price: String(price),
        unit: unit || 'hr',
        date,
        time,
        fname,
        lname,
        client_email: email,
        client_phone: phone || '',
        notes: notes || '',
      },
      payment_intent_data: {
        // Commission is 20% of service price only, not the processing fee
        application_fee_amount: commissionAmount,
        transfer_data: { destination: staelAccountId },
      },
      success_url: `${process.env.URL || 'https://staelfogarty.com'}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL || 'https://staelfogarty.com'}/contact.html`,
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log(`✓ Checkout created: ${session.id} | ${service} $${price} | commission $${commissionAmount/100} to Vyn Studio | $${(price*100-commissionAmount)/100} to Stael`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ url: session.url, sessionId: session.id }),
    };

  } catch (err) {
    console.error('Stripe error:', err.message);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
