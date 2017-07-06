// Define a function called calculator that receives an operation and two numbers and 
// returns the result of the operation applied to the values passed as parameters

function calculator(operation, num1, num2) {
  var result;
  switch (operation) {
    case 'suma':
      result = num1 + num2;
      break;
    case 'resta':
      result = num1 - num2;
      break;
    case 'multiplicacion':
      result = num1 * num2;
      break;
    case 'division':
      result = num1 / num2;
      break;
  }
  return result;
}

// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) 
// returns the result of the operation applied to the values passed as parameters

function calculatorPlus() {
  var result = 0;

  switch (arguments[0]) {
    case 'suma':
      for (var i = 1; i < arguments.length; i++) {
        result += arguments[i];
      }
      break;
    case 'resta':
      for (var i = 1; i < arguments.length; i++) {
        result -= arguments[i];
      }
      break;
    case 'multiplicacion':
      for (var i = 1; i < arguments.length; i++) {
        result *= arguments[i];
      }
      break;
    case 'division':
      for (var i = 1; i < arguments.length; i++) {
        result /= arguments[i];
      }
      break;
  }
  return result;
}
