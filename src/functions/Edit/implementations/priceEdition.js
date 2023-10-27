/* eslint-disable import/extensions */
import promptSync from 'prompt-sync';
import displayProducts from '../../../displays/displayProducts.js';

const prompt = promptSync();

function priceEdition(availableProducts) {
  console.log('\nEsses são nossos produtos: ');

  displayProducts(availableProducts);

  const productEdited = Number(
    prompt('\nDigite a opção correspondente ao produto que gostaria de editar: '),
  );
  const priceEdited = Number(prompt('\nDigite o novo preço do produto: '));

  availableProducts[productEdited].price = priceEdited;

  console.log('\nProduto editado com sucesso!');
}

export default priceEdition;
