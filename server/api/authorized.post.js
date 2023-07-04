export default defineEventHandler(async (event) => {  
  const {sku} = await readBody(event);
  //read the user and sku and send back the result

});