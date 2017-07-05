//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
function randomEven() {
  function random() {
    return Math.floor((Math.random() * 100) + 0);
  }
  var max = random();
  console.log('Randomized number: ' + max);
  for (var i = 0; i <= max; i++) {
    if (!(i & 1)) {
      console.log(i);
    }
  }
}

//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
//If the number was smaller than 40 nothing should be printed

function randomOdd() {
  function random() {
    return Math.floor((Math.random() * 100) + 0);
  }
  var min = 40;
  var max = random();

  console.log('Randomized number: ' + max);
  if (min <= max) {
    for (var i = 40; i <= max; i++) {
      if (i & 1) {
        console.log(i);
      }
    }
  } else {
    for (var i = 0; i <= min; i++) {
      console.log('Nothing');
    }
  }
}
