const { start } = require("./functions/start.js");
const { chooseOption } = require("./choices/chooseOption.js");
const { buyProducts } = require("./functions/buyProducts.js");
const { salesReport } = require("./functions/salesReport.js");
const { productAdder } = require("./functions/productAdder.js");

let availableProducts = [];
let chosenOption;
let chosenProduct;
let chosenQuantity;
let chosenReport;
let unitiesSold = [];
let itemsSold = [];
let valueSold = [];

class Product {
  name
  price
  quantity

  constructor(productName, productPrice, productQuantity){
    this.name = productName;
    this.price = productPrice;
    this.quantity = productQuantity;
  }
}
let Pão = new Product('Pão', 1, 300);
let Bolo = new Product('Bolo', 10, 45);
let Queijo = new Product('Queijo', 7, 90);

availableProducts.push(Pão, Bolo, Queijo);

loop: while (1) {
  start();
  switch (chooseOption(chosenOption)) {
    case "0":
      buyProducts(
        availableProducts,
        chosenProduct,
        chosenQuantity,
        unitiesSold,
        itemsSold,
        valueSold,
      );
      continue;
    case "1":
      productEditor()
      continue;
    case "2":
      productSubtractor()
      continue
    case "3":
      productAdder(availableProducts, Product);
      continue;
    case "4":
      salesReport(chosenReport, unitiesSold, itemsSold, valueSold);
      continue
    case "5":
      console.log("\nObrigado pela preferência e volte sempre!");
      break loop;
  }
}
