function max(a, b) {
  return (a > b) ? a : b;
}

function max1(num1, num2) {
  return Math.max(num1, num2);
}

function maxOfThree(a, b, c) {
  var result;
  if (a > b && a > c) {
    result = a;
  } else if (b > c) {
    result = b;
  } else {
    result = c;
  }
  return result;
}
