/* eslint-disable import/extensions */
import chooseProduct from '../../../choices/chooseProduct.js';

function cart(
  availableProducts,
  chosenProduct,
  chosenQuantity,
  unitiesSold,
  itemsSold,
  valueSold,
  cartValue,
) {
  ({ chosenProduct, chosenQuantity, unitiesSold, itemsSold } = chooseProduct(
    availableProducts,
    chosenProduct,
    chosenQuantity,
    unitiesSold,
    itemsSold,
  ));

  cartValue = chosenQuantity * availableProducts[chosenProduct].price;
  valueSold.push(cartValue);

  console.log(`\nSeu pedido ficou em R$${cartValue}`);
  console.log(
    '\nObrigado por comprar conosco! Aguarde um instante, estamos te redirecionando ao início...',
  );
}

export default cart;
