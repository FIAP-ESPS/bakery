/* eslint-disable import/extensions */
import chooseReport from '../../choices/chooseReport.js';
import displayReports from '../../displays/displayReports.js';
import unitiesReport from './implementations/unitiesReport.js';
import namesReport from './implementations/namesReport.js';
import cashRegister from './implementations/cashRegister.js';

function salesReport(unitiesSold, itemsSold, valueSold) {
  let chosenReport;
  const reportOptions = [
    'Número de unidades vendidas',
    'Quais foram produtos vendidos',
    'Saldo em caixa',
    'Todos',
  ];

  console.log('\nQual relatório você gostaria de consultar? ');

  displayReports(reportOptions);

  switch (chooseReport(chosenReport)) {
    case '0':
      unitiesReport(unitiesSold);
      break;
    case '1':
      namesReport(itemsSold);
      break;
    case '2':
      cashRegister(valueSold);
      break;
    case '3':
      unitiesReport(unitiesSold);
      namesReport(itemsSold);
      cashRegister(valueSold);
      break;
    default:
      break;
  }
}

export default salesReport;
