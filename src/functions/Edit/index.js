/* eslint-disable import/extensions */
import displayEditions from '../../displays/displayEditions.js';
import chooseEdition from '../../choices/chooseEdition.js';
import nameEdition from './implementations/nameEdition.js';
import quantityEdition from './implementations/quantityEdition.js';
import priceEdition from './implementations/priceEdition.js';
import fullEdition from './implementations/fullEdition.js';

function productEditor(availableProducts) {
  const editionsOptions = [
    'Nome do produto',
    'Quantidade em estoque',
    'Preço por unidade',
    'Todos',
  ];

  console.log('\nQual atributo você gostaria de editar? ');

  displayEditions(editionsOptions);

  switch (chooseEdition(editionsOptions)) {
    case '0':
      nameEdition(availableProducts);
      break;
    case '1':
      quantityEdition(availableProducts);
      break;
    case '2':
      priceEdition(availableProducts);
      break;
    case '3':
      fullEdition(availableProducts);
      break;
    default:
      break;
  }
}

export default productEditor;
