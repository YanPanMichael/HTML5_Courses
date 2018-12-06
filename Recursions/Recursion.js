'use strict'
//尾递归
const factorial = (n, total = 1) => {
  console.trace();
  if(n === 1) {
    return total;
  }
  return factorial(n - 1, n * total)
}

factorial(4);
//node --harmony_tailcalls Recursion.js