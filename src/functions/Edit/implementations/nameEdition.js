/* eslint-disable import/extensions */
import promptSync from 'prompt-sync';
import displayProducts from '../../../displays/displayProducts.js';

const prompt = promptSync();

function nameEdition(availableProducts) {
  console.log('\nEsses são nossos produtos: ');

  displayProducts(availableProducts);

  const productEdited = Number(
    prompt('\nDigite a opção correspondente ao produto que gostaria de editar: '),
  );

  const nameEdited = prompt('\nDigite o novo nome do produto: ');

  availableProducts[productEdited].name = nameEdited;

  console.log('\nProduto editado com sucesso!');
}

export default nameEdition;
