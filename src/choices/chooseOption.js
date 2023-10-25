const prompt = require('prompt-sync')();

function chooseOption(chosenOption) {
  chosenOption = prompt('\nDigite o número correspondente à opção desejada: ');
  return chosenOption;
}
module.exports = { chooseOption };
