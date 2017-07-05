// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u', ' ']
  var translated = ''
  for (i = 0; i < str.length; i++) {
    var current = str.charAt(i) // for every letter
    if (vowels.indexOf(current) != -1) { // if current is finded
      translated += current
    } else {
      translated += (current + 'o' + current)
    }
  }
  return translated
}
