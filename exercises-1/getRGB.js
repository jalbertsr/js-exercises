function getRGB(hexa) {
  var colors = [];
  var hex_string, rgb;
  for (var i = 1; i < hexa.length; i += 2) {
    hex_string = hexa.slice(i, i + 2);
    rgb = parseInt(hex_string, 16);
    colors.push(rgb);
  }
  return "rgb("
  colors[0] + ","
  colors[1] + ","
  colors[2] + ")";
}

//WAY 3
function getRGB(hexa) {

  var red = parseInt(hexa[1] + hexa[2], 16);
  var green = parseInt(hexa[3] + hexa[4], 16);
  var blue = parseInt(hexa[5] + hexa[6], 16);

  return "rgb(" + red + "," + green + "," + blue + ")";
}
