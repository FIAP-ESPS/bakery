function displayProducts(availableProducts) {
  for (const product of availableProducts) {
    console.log(
      `\n${availableProducts.indexOf(product)} - ${product.name} (R$${product.price}/unidade) - ${
        product.quantity
      } unidades disponíveis `,
    );
  }
}

export default displayProducts;
