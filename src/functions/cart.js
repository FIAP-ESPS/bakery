const { chooseProduct } = require("../choices/chooseProduct");

function cart(availableProducts, chosenProduct, chosenQuantity, unitiesSold, itemsSold, valueSold) {
  ({ chosenProduct, chosenQuantity, unitiesSold, itemsSold } = chooseProduct(
    availableProducts,
    chosenProduct,
    chosenQuantity,
    unitiesSold,
    itemsSold
  ));

  cartValue = chosenQuantity * availableProducts[chosenProduct].price;
  valueSold.push(cartValue);

  console.log(`\nSeu pedido ficou em R$${cartValue}`);
  console.log(
    `\nObrigado por comprar conosco! Aguarde um instante, estamos te redirecionando ao início...`
  );
}
module.exports = { cart };
