const add = (cart, req) => {
  cart.contents.push(req.body); //то что хотим передать
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {

};

module.exports = {
  add,
  change,
};
