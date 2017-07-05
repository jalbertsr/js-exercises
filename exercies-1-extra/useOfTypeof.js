//Define a function called ​getFullName​ that receives a name and a surname and 
//return the string "Your full name is " with the name & surname concatenated

function getFullName(name, surname) {
  return 'Your full name is ' + '" ' + name + surname + ' "'
}

//Define a function called ​isNumber​ that receives a value and return true if the value received is a number
function isNumber() {
  return typeof arguments[0] === 'number' ? true : false;
}

//Define a function called ​isString​ that receives a value and return true if the value received is a string
function isString() {
  return typeof arguments[0] === 'string' ? true : false;
}

//Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean
function isBoolean() {
  return typeof arguments[0] === 'boolean' ? true : false;
}
