const prompt = require('prompt-sync')();

function chooseReport(chosenReport) {
  chosenReport = prompt('\nDigite o número correspondente à opção desejada: ');
  return chosenReport;
}
module.exports = { chooseReport };
