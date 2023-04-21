function cashFunction(func) {
  let cash = {};

  return function (n) {
    if (cash[n]) {
      console.log("from cash");
      return cash[n];
    }

    let result = func(n);
    
    cash[n] = result

    console.log("from result");

    return result;
  };
}

function factorial(n) {
  let result = n;

  while (n !== 1) {
    n -= 1;

    result *= n;
  }

  return result;
}

const cashingFactorial = cashFunction(factorial);

console.log(cashingFactorial(5));
console.log(cashingFactorial(5));
console.log(cashingFactorial(3));
console.log(cashingFactorial(2));
console.log(cashingFactorial(1));
console.log(cashingFactorial(5));
console.log(cashingFactorial(4));
