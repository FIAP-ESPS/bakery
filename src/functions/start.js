const { displayOptions } = require("../displays/displayOptions.js");

function start() {
  let options = [
    "0 - Comprar produtos",
    "1 - Editar um produto",
    "2 - Remover um produto",
    "3 - Adicionar um produto",
    "4 - Relatório de vendas",
    "5 - Sair",
  ];

  console.log(`\nO que você gostaria de fazer?`);

  displayOptions(options);
}
module.exports = { start };
