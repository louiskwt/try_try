function getFinalPrice(price: number, discount: number): number {
  return price - price / discount;
}

//  tsc --t ES5 main --noEmitOnError true
//  set noEmitOnError true to prevent compiling if there is an error
console.log(getFinalPrice(100, 10));
console.log(getFinalPrice(100, 20));
