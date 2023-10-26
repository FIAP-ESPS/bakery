
const { start } = require('./functions/start');
const { chooseOption } = require('./choices/chooseOption');
const { buyProducts } = require('./functions/buyProducts');
const { salesReport } = require('./functions/salesReport');
const { productAdder } = require('./functions/productAdder');
const { productSubtractor } = require('./functions/productSubtractor');

const availableProducts = [];
let chosenOption;
let chosenProduct;
let chosenQuantity;
let chosenReport;
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

loop: while (1) {
  start();
  switch (chooseOption(chosenOption)) {
    case '0':
      buyProducts(
        availableProducts,
        chosenProduct,
        chosenQuantity,
        unitiesSold,
        itemsSold,
        valueSold,
      );
      continue;
    case '1':
      productEditor();
      continue;
    case '2':
      productSubtractor(availableProducts);
      continue;
    case '3':
      productAdder(availableProducts, Product);
      continue;
    case '4':
      salesReport(chosenReport, unitiesSold, itemsSold, valueSold);
      continue;
    case '5':
      console.log('\nObrigado pela preferência e volte sempre!');
      break loop;
  }
}
