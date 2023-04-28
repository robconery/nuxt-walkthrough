# Episode 14: Server API and Auth, Part 1
We need to know who are viewer is so we can show them their video! That means we need to plugin authentication.

## Authentication in Frontend Land
We have two applications we need to think about in terms of auth: frontend and backend. Ideally the auth scheme will be seamless between both!

 - Moving away from cookies to JWTs
 - A quick review of JWTs and how they work
 - MFA, 2FA, OMFG

## Services vs. Home-rolled
We can do so much more with Auth these days! Here are some services to consider...

 - Auth0 and Okta
 - Hanko
 - Firebase and Supabase

## Hello Nitro!
We'll dig in and leverage the built-in server that comes with Nuxt: Nitro.

 - File-based routing, using fun convention
 - Sending an auth code
 - Verifying an auth code

## Some Opinion: let's ditch passwords
I've run my own business for the last 15 years and the best decision I made was to ditch passwords (when I can). Browsers and phones are very well equipped when it comes to authenticators and biometrics - let's use them!

## Code to Help
I whipped out some commands at the start of this episode in the console - here they are:

```sh
mkdir server && cd server
mkdir api
mkdir lib
touch lib/smtp
mkdir api/auth
touch api/auth/send-link.js
touch api/auth/validate-code.js


# Modules
npm install nodemailer dotenv jsonwebtoken
```

I also created an SMTP service, which is this:

```js
import * as dotenv from 'dotenv'
dotenv.config()
import nodemailer from "nodemailer";

const client = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  pool: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function sendMail(args){
  await client.sendMail(args);
}
```