// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum (numbers) {
  var totalSum = 0
  for (var i = 0; i < numbers.length; i++) {
    totalSum += numbers[i]
  }
  return totalSum
}

function sum (numbers){
  return numbers.reduce(function(item, acc){
    return item + acc;
  },0);
}

function multiply (numbers) {
  var totalSum = 1
  for (var i = 0; i < numbers.length; i++) {
    totalSum *= numbers[i]
  }
  return totalSum
}
