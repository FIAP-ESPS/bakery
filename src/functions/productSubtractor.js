const prompt = require('prompt-sync')();

const { displayProducts } = require("../displays/displayProducts");

function productSubtractor(availableProducts) {
  displayProducts(availableProducts);

  const removedProduct = Number(prompt(
    '\nQual produto você gostaria de remover do nosso estoque? '
  ));

  console.log(`\nO produto ${availableProducts[
    removedProduct
  ].name.toLowerCase()} foi removido`)

  availableProducts.splice(removedProduct, 1);

  
}
module.exports = { productSubtractor };
