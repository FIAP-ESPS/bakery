const { displayProducts } = require('../displays/displayProducts');
const { cart } = require('./cart');

function buyProducts(
  availableProducts,
  chosenProduct,
  chosenQuantity,
  unitiesSold,
  itemsSold,
  valueSold,
) {
  console.log('\nQual produto você deseja comprar?');

  displayProducts(availableProducts);

  cart(availableProducts, chosenProduct, chosenQuantity, unitiesSold, itemsSold, valueSold);
}

module.exports = { buyProducts };
