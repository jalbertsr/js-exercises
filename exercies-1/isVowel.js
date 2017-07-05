function isVowel(vowel) {
  var result = false;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === vowel) {
      result = true;
    }
  }
  return result;
}

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) === -1 ? true : false;
}

function isVowel(vowel) {
  return [/aeiou/].match(regex);
}
