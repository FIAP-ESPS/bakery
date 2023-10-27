function cashRegister(valueSold) {
  let sum = 0;

  for (const value of valueSold) {
    sum += value;
  }

  console.log(`\nO saldo atual de caixa está em R$${sum}`);
}

export default cashRegister;
