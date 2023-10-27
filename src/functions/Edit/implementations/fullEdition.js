/* eslint-disable import/extensions */
import promptSync from 'prompt-sync';
import displayProducts from '../../../displays/displayProducts.js';

const prompt = promptSync();

function fullEdition(availableProducts) {
  console.log('\nEsses são nossos produtos: ');

  displayProducts(availableProducts);

  const productEdited = Number(
    prompt('\nDigite a opção correspondente ao produto que gostaria de editar: '),
  );

  const fullEditedName = prompt('\nDigite o novo nome do produto: ');
  const fullEditedPrice = prompt('\nDigite o novo preço do produto: ');
  const fullEditedQuantity = Number(prompt('\nDigite a nova quantidade em estoque do produto: '));

  availableProducts[productEdited].name = fullEditedName;
  availableProducts[productEdited].price = fullEditedPrice;
  availableProducts[productEdited].quantity = fullEditedQuantity;

  console.log('\nProduto editado com sucesso!');
}

export default fullEdition;
