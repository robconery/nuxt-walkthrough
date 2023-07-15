# Episode 27: Completing the Completions
We got a TON done in the last episode so, hopefully, we can keep it up as we're almost there...

## Setting Up CRUD Policies
We need to lock down what a user can do here, so let's be sure to contain:
 
 - Inserting/Deleting
 - Reading

## Setting Up State
We need a few bits of state, primarily:

 - a `completed` array
 - a `toggleComplete` method
 - an `isComplete` getter

## Updating the Components
After all of the above, we need to hook up:

 - The `Commands` component
 - The lesson page (to load completions)
 - The course nav, so we know what's completed
 - The `progress` component