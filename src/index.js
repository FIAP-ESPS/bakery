/* eslint-disable import/extensions */
import start from './functions/start.js';
import chooseOption from './choices/chooseOption.js';
import buyProducts from './functions/Buy/index.js';
import salesReport from './functions/Report/index.js';
import productAdder from './functions/Add/index.js';
import productSubtractor from './functions/Remove/index.js';
import productEditor from './functions/Edit/index.js';

const availableProducts = [];
const unitiesSold = [];
const itemsSold = [];
const valueSold = [];

class Product {
  name;

  price;

  quantity;

  constructor(productName, productPrice, productQuantity) {
    this.name = productName;
    this.price = productPrice;
    this.quantity = productQuantity;
  }
}

const Pão = new Product('Pão', 1, 300);
const Bolo = new Product('Bolo', 10, 45);
const Queijo = new Product('Queijo', 7, 90);

availableProducts.push(Pão, Bolo, Queijo);

loop: while (true) {
  start();
  switch (chooseOption()) {
    case '0':
      buyProducts(availableProducts, unitiesSold, itemsSold, valueSold);
      continue;
    case '1':
      productSubtractor(availableProducts);
      continue;
    case '2':
      productAdder(availableProducts, Product);
      continue;
    case '3':
      productEditor(availableProducts);
      continue;
    case '4':
      salesReport(unitiesSold, itemsSold, valueSold);
      continue;
    case '5':
      console.log('\nObrigado pela preferência e volte sempre!');
      break loop;
    default:
      continue;
  }
}
