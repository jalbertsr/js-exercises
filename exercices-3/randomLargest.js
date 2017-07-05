//Randomizes three numbers in range (0.. 100) and prints the largest one.
function randomLargest() {
  function random() {
    return Math.floor((Math.random() * 100) + 0);
  }
  var result = 0;
  for (var i = 0; i < 3; i++) {
    var temp = random();
    console.log('Num ' + (i + 1) + ': ' + temp);
    if (result < temp) result = temp;
  }
  console.log('Largest: ' + result);
}
