# Episode 3: Sitewide data and more menus
In this episode we're going to work with application data so we can build menus and set the title of each page

## Quick discussion about using Vuetify
In the book I used Tailwind, but here I'm using Vuetify... what gives?

## Setting up app.config
Nuxt gives us a central place for application-level data, which includes:

 - The site menu
 - Specific application links
 - Social menu
 - About/Description and Default meta "stuff"

Every page will need this, so let's do it now!

## Creating an a helper function
We'll get our first introduction to writing composables in Nuxt - little helper functions that can be used on both the client and the server.

 - The SEO composable


