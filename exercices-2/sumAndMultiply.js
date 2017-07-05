// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(operators) {
  var totalSum = 0
  for (var i = 0; i < operators.length; i++) {
    totalSum += operators[i]
  }
  return totalSum
}

function multiply(operators) {
  var totalSum = 1
  for (var i = 0; i < operators.length; i++) {
    totalSum *= operators[i]
  }
  return totalSum
}
