function numbers(a,b){
	if(b>a){
		console.log(-1)
	}
		for(var i = a;a<b ;i++){
			console.log(i);
		}
}

function multiplication() {
    var result = "";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            result += (i * j) + "\t";
        }
        result += "\n";
    }
    console.log(result);
}


function multiplication(a){
	for(var i = 0;i<=10; i++){
		console.log(i*a+"/n");
	}
}

function multiples(){
	var sum = 23;
	var elemets ="Elemets :";
	var total_sum = 0;
	for(var i = 0;sum<=500;i++){
		elemets += " "+sum;
		total_sum += sum;
		sum+=23; 

	}
	console.log(elemets);
	console.log('Sum : '+total_sum);
}

function max(a,b){ 	
	return (a>b) ? a:b;
 } 

function max1(num1,num2){
	return Math.max(num1,num2);
}

function maxOfThree(a,b,c){
	var result;
	if(a>b && a>c){
		result = a; 
	}
	else if(b>c){
		result = b;
	}
	else{
		result = c;
	}
	return result;
}
/*
function isVowel(vowel){
	return (vowel === 'a'||'e'||'i'||'o'||'u') ? true; false;
}
*/

function isVowel(vowel){
	var result = false;
	var vowels = ['a','e','i','o','u'];
	for(var i = 0;i<vowels.length;i++){
		if(vowels[i] === vowel){
			result = true;
		}
	}
	return result;
}

function isVowel(char){
	return ['a','e','i','o','u'].indexOf(char) === -1  ? true : false;
}

function isVowel(vowel){
	var regex = [/aeiou/];
	return vowel.match(regex);

}
/*WAY 1
function getRGB(hexa){
	var arr = hexa.split("");
	arr.shift()
	var hex_string = arr.join("");
	var rgb = parseInt(hex_string, 16);

	return "rgb(0,"+rgb+",0)";
}
*/
/*WAY 2
function getRGB(hexa){
  var colors = [];
  var hex_string,rgb;
  for(var i = 1;i<hexa.length;i+=2){ 
   hex_string = hexa.slice(i,i+2);
   rgb = parseInt(hex_string, 16);
   colors.push(rgb);
  }
  return "rgb("colors[0]+","colors[1]+","colors[2]+")"; 
}
*/

//WAY 3
function getRGB(hexa){
 	
   var red = parseInt(hexa[1]+hexa[2], 16);
   var green = parseInt(hexa[3]+hexa[4],16);
   var blue = parseInt(hexa[5]+hexa[6],16);
 
  return "rgb("+red+","+green+","+blue+")"; 
}



function hexadecimal_enhanced(hexa){
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

