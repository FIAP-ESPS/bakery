const { chooseReport } = require("../choices/chooseReport");
const { displayReports } = require("../displays/displayReports");
const { unitiesReport } = require("./unitiesReport");
const { namesReport } = require("./namesReport");
const { cashRegister } = require("./cashRegister")

function salesReport(chosenReport, unitiesSold, itemsSold, valueSold) {
  let reportOptions = [
    "Número de unidades vendidas",
    "Quais foram produtos vendidos",
    "Saldo em caixa",
    "Todos",
  ];
  console.log("\nQual relatório você gostaria de consultar? ");

  displayReports(reportOptions);
  switch(chooseReport(chosenReport)){
    case '0':
      unitiesReport(unitiesSold);
      break
    case '1':
      namesReport(itemsSold);
      break
    case '2':
      cashRegister(valueSold);
      break
    case '3':
      unitiesReport(unitiesSold);
      namesReport(itemsSold);
      cashRegister(valueSold);
      break
    
  }

}
module.exports = { salesReport };
