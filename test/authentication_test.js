const {User} = require("../server/models");
const assert = require("assert");

describe('Authentication', () => {  
  let user;
  before(async function(){
    user = await User.create({
      email: "test@test.com",
      google: "GOOGLE",
      github: "GITHUB",
      magic_link: "LINK",
      magic_link_expires: new Date().getTime() + 5000
    });
  });
  it("a user can be created", () => {
    assert(user, "Nope")
  });
  it("user has a gravatar", () => {
    assert(user.gravatar, "No gravatar")
  });
  it("user is found by email", async () => {
    const found = await User.findByEmail(user.email);
    assert.strictEqual("test@test.com", found.email)
  });
  it("user is found by google id", async () => {
    const found = await User.findByGoogle(user.google);
    assert.strictEqual("GOOGLE", found.google)
  });
  it("user is found by github id", async () => {
    const found = await User.findByGitHub(user.github);
    assert.strictEqual("GITHUB", found.github)
  });
  it("user is found by magic link that's not expired", async () => {
    const found = await User.findByMagicLink("LINK");
    assert(found, "No user with magic link")
  });
  it("user is not found by expired magic link", async () => {
    user.magic_link_expires = 0;
    await user.save();
    const found = await User.findByMagicLink("LINK");
    assert(!found, "Nope - user was found")
  });
});