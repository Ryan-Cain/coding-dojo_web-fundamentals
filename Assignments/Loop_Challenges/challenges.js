// // 1
function printOdds(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
printOdds(20);

// // 2
function decreasingMultiples(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
decreasingMultiples(100);

// // 3
function printStepDown(start, stepAmount, stepTimes) {
  for (let i = 1; i <= stepTimes; i++) {
    console.log(start);
    start -= stepAmount;
  }
}
printStepDown(4, 1.5, 6);

// 4
function sigma(num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}
sigma(100);

// 5
function factorial(endpoint) {
  let product = 1;
  for (i = 2; i <= endpoint; i++) {
    product *= i;
  }
  console.log(product);
}
factorial(12);
