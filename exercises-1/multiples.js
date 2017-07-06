function multiples() {
  var sum = 23;
  var elemets = "Elemets :";
  var totalSum = 0;
  for (var i = 0; sum <= 500; i++) {
    elemets += " " + sum;
    totalSum += sum;
    sum += 23;

  }
  console.log(elemets);
  console.log('Sum : ' + totalSum);
}
