// Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

function encodeWord() {
  var newString = arguments[0].replace('T', 7).replace('A', 4).replace('A', 4).replace('O', 0);
  return newString;
}
//Improve the previous function to add a random number between 0 and 1000 every 7 characters
function encodeWoldPlus() {
  function random() {
    return Math.floor((Math.random() * 1000) + 0);
  }
  str = arguments[0].split("");
  for (var i = 7; i < str.length; i += 7) {
    str[i] = random();
  }
  return str.join(",");
}
