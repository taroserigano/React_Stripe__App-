# React_Stripe__App-
Simple React app that performs Payment through Stripe API 







    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });
    
    // this will send URL to the front-end
    // front-end will use this url to navigate to the Stripe's payment screen
    res.send(JSON.stringify({
        url: session.url
    }));
    
