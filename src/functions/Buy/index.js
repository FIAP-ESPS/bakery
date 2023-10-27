/* eslint-disable import/extensions */
import cart from './implementations/cart.js';
import displayProducts from '../../displays/displayProducts.js';

function buyProducts(availableProducts, unitiesSold, itemsSold, valueSold, cartValue) {
  let chosenProduct;
  let chosenQuantity;
  console.log('\nQual produto você deseja comprar?');

  displayProducts(availableProducts);

  cart(
    availableProducts,
    chosenProduct,
    chosenQuantity,
    unitiesSold,
    itemsSold,
    valueSold,
    cartValue,
  );
}

export default buyProducts;
