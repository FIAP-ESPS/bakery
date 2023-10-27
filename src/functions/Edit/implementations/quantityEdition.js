/* eslint-disable import/extensions */
import promptSync from 'prompt-sync';
import displayProducts from '../../../displays/displayProducts.js';

const prompt = promptSync();

function quantityEdition(availableProducts) {
  console.log('\nEsses são nossos produtos: ');

  displayProducts(availableProducts);

  const productEdited = Number(
    prompt('\nDigite a opção correspondente ao produto que gostaria de editar: '),
  );

  const quantityEdited = Number(prompt('\nDigite a nova quantidade em estoque do produto: '));

  availableProducts[productEdited].quantity = quantityEdited;

  console.log('\nProduto editado com sucesso!');
}

export default quantityEdition;
