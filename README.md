# Episode 29: The Stripe Webhook Receiver
Stripe is going to notify us when a sale happens, which means we need to have a receiver, somewhere.

## The Webhook
We have a simple task:

 - Save the ping (as `JSONB`)
 - Figure out what was bought and then authorize the course for the user

## Cleaning Up
We wiped out some code by moving to Supabase, so let's start by cleaning a few things out.

## Supabase Edge Functions
One of the simpler things we can do, I hope, it to use Supabase edge functions. We'll get to know them and see what's involved.

## Our Own API
We could also use our own API, which means we can't deploy this as a static app. Is this a better choice?

