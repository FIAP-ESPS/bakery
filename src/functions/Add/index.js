import promptSync from 'prompt-sync';

const prompt = promptSync();

function productAdder(availableProducts, Product) {
  const addProductName = prompt('\nInsira o nome do produto que deseja inserir: ');
  const addProductPrice = Number(
    prompt('\nInsira o preço por unidade do produto que deseja inserir: '),
  );
  const addProductQuantity = Number(
    prompt('\nInsira quantas unidades do produto deseja inserir: '),
  );

  const addProduct = new Product(addProductName, addProductPrice, addProductQuantity);

  availableProducts.push(addProduct);
}

export default productAdder;
