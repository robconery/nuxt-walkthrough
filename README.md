# Episode 5: Simple CMS with Nuxt Content
We have a bunch of _lorem ipsum_ but that will eventually change. We don't want to hard-code our content in our templates because Vue prefers your data (including content) to be separate! Time to investigate CMS's - this is real world stuff!

## Let's talk about headless CMS
There are a number of ways to get content into a page that don't include hand-rolling your HTML.

 - Services like Contentful and Prismic
 - Roll your own with Strapi
 - The simplest of the lot: Nuxt Content

## Creating a simple markdown experience
We'll replace our hero content with Nuxt Content to see how easy it is to work with the system.

 - Create a markdown document for hero
 - Get to know the document query system
 - Rob shares his opinion based on use in the wild

## Using Nuxt Content for all of our sections
Every section is a document! Weeee!

 - Refactor our components to work with our documents
 - Tweak the query results to make things easier to use
 - Think about scaling this as the company grows

