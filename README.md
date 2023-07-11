# Episode 24: Refactoring!

## Off Camera
 - Changed the Completed/Prev/Next buttons

## Fixing Fetch
We fetch the user every navigation because `setup` is called every single time the route changes - for every component! This also happens for lessons and courses.

## Marking Lessons as Complete
The easiest thing to do is to put a boolean flag on the lessons in our store that marks lessons which have been completed.

