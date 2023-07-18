// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const db = createClient(
  // Supabase API URL - env var exported by default.
  Deno.env.get('SUPABASE_URL') ?? '',
  // Supabase API ANON KEY - env var exported by default.
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',

);

// Import via bare specifier thanks to the import_map.json file.
import Stripe from 'https://esm.sh/stripe@11.1.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_API_KEY') as string, {
  // This is needed to use the Fetch API rather than relying on the Node http
  // package.
  apiVersion: '2022-11-15',
  httpClient: Stripe.createFetchHttpClient(),
});
// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider()

serve(async (request) => {

  const signature = request.headers.get('stripe-signature');
  // First step is to verify the event. The .text() method must be used as the
  // verification relies on the raw request body rather than the parsed JSON.
  const body = await request.text()
  let receivedEvent;
  console.log("Checking signature...")
  try {
    //this will throw if it's not OK
    receivedEvent = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!,
      undefined,
      cryptoProvider
    );
  } catch (err) {
    return new Response(err.message, { status: 400 })
  }
  console.log(`Signature good, event received: ${receivedEvent.id}`)
  //check the event name
  //if new invoice, save ping and authorize
  if(receivedEvent.type === "invoice.payment_succeeded"){
    try{
      const invoice = receivedEvent.data.object;
      console.log(`Invoice payment received: ${invoice.id}; saving`)
      
      const {data, error} = await db.rpc("stripe_invoice_payment", {
        ping: invoice, 
        course_id: 1
      }).select();

      console.log(`Ping saved ${data}`);
      
    }catch(err){
      return new Response(JSON.stringify({ error: err }), { status: 500 })
    }

  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 })
})