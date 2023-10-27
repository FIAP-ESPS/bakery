function unitiesReport(unitiesSold) {
  let totalUnitiesSold = 0;

  for (const unitySold of unitiesSold) {
    totalUnitiesSold += unitySold;
  }

  console.log(`\nO total de unidades vendidas foi de ${totalUnitiesSold}`);
}

export default unitiesReport;
