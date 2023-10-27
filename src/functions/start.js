/* eslint-disable import/extensions */
import displayOptions from '../displays/displayOptions.js';

function start() {
  const options = [
    '0 - Comprar produtos',
    '1 - Remover um produto',
    '2 - Adicionar um produto',
    '3 - Editar um produto',
    '4 - Relatório de vendas',
    '5  - Sair',
  ];

  console.log('\nO que você gostaria de fazer?');

  displayOptions(options);
}

export default start;
