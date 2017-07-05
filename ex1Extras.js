function calculator(operation, num1, num2){
	var result;
	switch(operation){
		case 'suma':
			result = num1 + num2;
			break;
		case 'resta':
			result = num1-num2;
			break;
		case 'multiplicacion':
			result = num1*num2;
			break;
		case 'division':
			result = num1/num2;
			break;
	}
	return result;
}

function calculatorPlus(){
	var result = 0;

	switch(arguments[0]){
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

function getFullName(name, surname){
	return 'Your full name is ' +'" '+name + surname+' "'
}

function isNumber(){
	return typeof arguments[0] === 'number' ? true:false; 
}

function isString(){
	return typeof arguments[0] === 'string' ? true:false; 
}

function isBoolean(){
	return typeof arguments[0] === 'boolean' ? true:false; 
}

function encodeWord(){
	var newString = arguments[0].replace('T',7).replace('A',4).replace('A',4).replace('O',0);
	return newString;
}

function encodeWolrdPlus(){
	function random(){
		return Math.floor((Math.random() * 1000) + 0);
	}
	str = arguments[0].split("");
	for(var i = 7;i<str.length;i+=7){
		str[i] = random();
	}
	return str.join(",");
}