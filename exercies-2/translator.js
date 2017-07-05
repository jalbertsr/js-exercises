/*
Represent a small bilingual lexicon as a Javascript object in the following fashion 
{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
and use it to translate your Christmas cards from English into Swedish.
*/

function translate(str) {
  var translator = { 'merry': 'god', 'christmas': 'jul', 'and': 'och', 'happy': 'gott', 'new': 'nytt', 'year': 'år' }
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    if (translator.hasOwnProperty(str[i])) {
      str[i] = translator[str[i]];
    }
  }
  return str.join(' ');
}
