/*
Represent a small bilingual lexicon as a Javascript object in the following fashion 
{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
and use it to translate your Christmas cards from English into Swedish.
*/

function translate (str) {
  var dictionary = { 'merry': 'god', 'christmas': 'jul', 'and': 'och', 'happy': 'gott', 'new': 'nytt', 'year': 'år' }
  str = str.split(' ')
  for (var i = 0; i < str.length; i++) {
    if (dictionary.hasOwnProperty(str[i])) {
      str[i] = dictionary[str[i]]
    }
  }
  return str.join(' ')
}
function translate ('happy new year')

function translate (text){
	for(word in dictionary){
		text = text.replace(new RegExp(word, "g"), dictionary[word]);
	}
	return text; 
}
