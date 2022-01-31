'use strict';
function solveEquation(a, b, c) {
  let d = b**2 - 4 * a * c;
  let arr = [];
  let x1;
  let x2;

  if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / 2 * a;
      x2 = (-b - Math.sqrt(d)) / 2 * a;
      arr.push(x1,x2);
  } else if (d === 0) {
      x1 = (-b + Math.sqrt(d)) / 2 * a;
      arr.push(x1);
  };
 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  return totalAmount;
  // код для задачи №2 писать здесь
}


