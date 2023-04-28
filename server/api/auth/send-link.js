import crypto from "crypto";
import {sendMail} from "../../lib/smtp";

export default defineEventHandler(async (event) => {  
  // const email = event.context.body.email;
  // const code = event.context.body.code;
  const email = "robconery@gmail.com";
  const code = 55555; //randomize please

  let user = await useStorage().getItem(`user:${email}`);
  if(!user){
    user = {
      email: email,
      id: crypto.randomUUID()
    }
  }

  user.code = code;
  user.codeExpires = new Date().getTime() + (1000 * 60 * 30);

  await useStorage().setItem(`user:${email}`, user);

  //send an email!
  await sendMail({
    to: email,
    from: "rob@bigmachine.io",
    subject: "Your login code",
    html: `
    <p>
      You requested a login code (at least I hope it was you) so here you go!
    <p>
    <h2>
      ${code}
    </h2>
    <p>Pop that into the site and off you go!</p>
    `
  });
  return {success: true}
});