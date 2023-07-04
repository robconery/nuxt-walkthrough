const {User, Product} = require("../server/models");
const assert = require("assert");

describe('Authorizations', () => { 
  let user,product = null;
  before(async function(){
    user = await User.create({email: "test2@test.com"});
    product = await Product.create({sku: "test"});
    await user.addProduct(product);
  });
  it("test2 is authorized for test product", async function(){
    const authorized = await user.isAuthorized("test");
    assert(authorized);
  });
});