import { NextResponse } from "next/server"
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export const POST =  async ()=> {

    const stripeProducts = [ {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },]

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        line_items: stripeProducts,
        mode: 'payment',
        success_url: ``,
        cancel_url: ``,
      });
    return NextResponse.json({
        data: 'Hellow world!'
    })
}



