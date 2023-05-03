# Episode 16: Auth Part 3 - Finishing up the UI (I hope)
Got a little stuck with things last time, which is fine - it happens every time I use Vue 3!

## Testing? Hello?
Yes, testing is always a good idea! Unfortunately...

## Formalizing state for the form
We're beyond simple boolean checks for the state of our modal as we need to transition between:

 - Email prompt
 - Registration if not recognized
 - Code input

## Adding a logout feature
I don't ever logout of web sites but I'm sure there's a use case for this.

## Round things out
We have two app bars right now which is OK, but we're at a point where we should think about collapsing things.

 - Let's see if we can use slots!
 - Add a loader icon to the send link button
