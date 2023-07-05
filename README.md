# Episode 19: Authorization, Part 2
In this episode we're going to wire up the login process, end to end. We'll adjust a few things along the way, as needed.

## Finishing the Validator
I stubbed out a few things in the `validate-code` handler, so it's likely I'll need to rethink what I'm doing...

 - Have a look at the existing code
 - Add our `User` model and wire it up

## Creating Seeds
We're working in development mode now, which means we'll need to seed our database with our dev data. 

 - Create a `seed` task we can use as needed
 - Add test data for `User` and `Product`

## The Authorized Payload
Finally, we're at the point where we can ping our API to see if our user is authorized for a given video. We can noodle on this for hours, or we could do the simplest thing... but what's that?

 - All course/lesson info goes in the DB
 - Only lesson/video info goes in the DB and we deal with dual data stores

