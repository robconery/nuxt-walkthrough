# Episode 18: Authorization
We can't escape it: we need a database! We have lots of choices but I'm going to go with what I would really do, so here we go!

## Considerations
How do we want to store our data and, more importantly, how should we get started?

 - Keep ignoring it and use something like `json-server`
 - Use a hosted system that's easy, like Supabase or Firebase
 - Roll up our sleeves and start building our models

I don't like the idea of writing code I know I'll throw away, so maybe we go with the 3rd option. Which leaves the question...

## Why Not Firebase or Supabase?
Short answer: these are great choices which I'll get into later, but only if you understand:

 - They replace your entire backend and API
 - Security rules! So easy to mess up.
 - They also replace your application state, in some ways (if you go full realtime)

## My User Code
I have some code ready to go that I added to the project and we'll walk through

