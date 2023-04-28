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