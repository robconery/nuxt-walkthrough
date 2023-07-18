require("dotenv").config();
const {createClient} = require("@supabase/supabase-js");
const assert = require("assert");
const ping = require("./helpers/ping.json");

const db = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY  
);
describe('Incoming Stripe Ping', () => {  
  let result;
  before(async function(){
    //await db.from("authorizations").delete().eq("email", "robconery@gmail.com");
    //await db.from("pings").delete().eq("id", ping.data.object.id);
    result = await db.rpc("stripe_invoice_payment", {
      ping: ping.data.object, 
      course_id: 1
    }).select();
  });
  it("should return a text value", async function(){
    console.log(result.data, result.error);
  });
});