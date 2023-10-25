const prompt = require('prompt-sync')();

const { displayProducts } = require('../displays/displayProducts');

function productSubtractor(availableProducts) {
  displayProducts(availableProducts);

  const removedProduct = prompt('Qual produto você gostaria de remover do nosso estoque? ');
}
