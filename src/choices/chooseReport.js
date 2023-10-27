import promptSync from 'prompt-sync';

const prompt = promptSync();

function chooseReport(chosenReport) {
  chosenReport = prompt('\nDigite o número correspondente à opção desejada: ');

  return chosenReport;
}

export default chooseReport;
