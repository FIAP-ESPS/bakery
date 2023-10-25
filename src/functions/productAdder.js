const prompt = require('prompt-sync')();

function productAdder(availableProducts, Product) {
  const addProductName = prompt('\nInsira o nome do produto que deseja inserir: ');
  const addProductPrice = Number(prompt('\nInsira o preço do produto que deseja inserir: '));
  const addProductQuantity = Number(
    prompt('\nInsira quantas unidades do produto deseja inserir: '),
  );

  const addProduct = new Product(addProductName, addProductPrice, addProductQuantity);

  availableProducts.push(addProduct);
}
module.exports = { productAdder };
