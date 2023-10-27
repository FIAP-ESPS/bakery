import promptSync from 'prompt-sync';

const prompt = promptSync();

function chooseEdition(chosenEdition) {
  chosenEdition = prompt('\nDigite o número correspondente à opção desejada: ');

  return chosenEdition;
}

export default chooseEdition;
