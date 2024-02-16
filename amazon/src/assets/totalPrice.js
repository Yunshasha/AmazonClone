export function totalPriceCal(products) {
  return products.reduce((acc, curr) => acc + curr.price, 0);
}
