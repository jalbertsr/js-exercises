function multiplication() {
  var result = "";
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      result += (i * j) + "\t";
    }
    result += "\n";
  }
  console.log(result)
}
