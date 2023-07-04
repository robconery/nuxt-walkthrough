require("dotenv").config();
const { DB } = require("../../server/models");

before(async () => {
  await DB.sync();
});

after(async () => {
  await DB.close();
});