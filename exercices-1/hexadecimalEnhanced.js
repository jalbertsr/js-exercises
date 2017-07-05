function hexadecimalEnhanced
(hexa){
	var color;
	var results = [];
	var hex_string,rgb;

	switch(hexa){
		case '#000000':
			color = 'Black';
			break;
		case '#FFFFFF':
			color = 'Red';
			break;
		case '#FF0000':
			color = 'Green';
			break;
		case '#0000FF':
			color = 'Blue';
			break;
		case '#00FF00':
			color = 'Green';
			break;
		default:
			color = 'Unknown'
			break;
		;
	}

  for(var i = 1;i<hexa.length;i+=2){ 
   hex_string = hexa.slice(i,i+2);
   rgb = parseInt(hex_string, 16);
   results.push(rgb);
  }
  return "rgb("+results[0]+","+results[1]+","+results[2]+") color: "+color; 
}
