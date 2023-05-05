# Episode 17: Auth, Part 4
The customer can login, but now what? We need to update the UI and make sure they can watch the videos they've selected.

## Setting Up Gravatar
We have John the Placeholder in now - let's formalize this:

 - Choosing when, and where, to create an avatar using gravatar
 - Conditional display
 - Showing the login

## Access Rules
When our user is logged in we need a way to know if they can watch a given video:

 - Creating an API call for authorization
 - Free videos are always watchable by anyone, logged in or not

## Oh Yeah... Logging Out
What happens when a user logs out? I was supposed to do this a few episodes ago...

 - Add a logout button
