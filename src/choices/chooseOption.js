import promptSync from 'prompt-sync';

const prompt = promptSync();

function chooseOption(chosenOption) {
  chosenOption = prompt('\nDigite o número correspondente à opção desejada: ');

  return chosenOption;
}

export default chooseOption;
