/* eslint-disable import/extensions */
import promptSync from 'prompt-sync';
import displayProducts from '../../displays/displayProducts.js';

const prompt = promptSync();

function productSubtractor(availableProducts) {
  displayProducts(availableProducts);

  const removedProduct = Number(
    prompt('\nQual produto você gostaria de remover do nosso estoque? '),
  );

  console.log(`\nO produto ${availableProducts[removedProduct].name.toLowerCase()} foi removido`);

  availableProducts.splice(removedProduct, 1);
}

export default productSubtractor;
