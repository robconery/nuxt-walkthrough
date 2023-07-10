# Episode 23: Tracking User Progress
Users want to know what videos they've watched so they can track their progress, so let's enable that.

## Tracking Completions
We'll need to add another model, which we'll call `Progress` and will be a many-to-many relationship between `User` and `Lesson`.

 - Discussion: this is weird database design as we have `User` and `Course` linked with `Authorization`.
 - Hook up the API endpoint

## The Course Progress Bar
This will track how far along users are in terms of total minutes.

 - Calculating total duration in minutes
 - Setting the bar
 - Updating the bar upon completion

