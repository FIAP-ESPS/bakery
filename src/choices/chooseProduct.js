import promptSync from 'prompt-sync';

const prompt = promptSync();

function chooseProduct(availableProducts, chosenProduct, chosenQuantity, unitiesSold, itemsSold) {
  chosenProduct = Number(prompt('\nDigite o número correspondente à opção desejada: '));

  chosenQuantity = Number(
    prompt(
      `\nQuantas unidades de ${availableProducts[
        chosenProduct
      ].name.toLowerCase()} você gostaria? `,
    ),
  );

  availableProducts[chosenProduct].quantity -= chosenQuantity;

  unitiesSold.push(chosenQuantity);
  itemsSold.push(availableProducts[chosenProduct].name);

  return {
    chosenProduct,
    chosenQuantity,
    unitiesSold,
    itemsSold,
  };
}

export default chooseProduct;
