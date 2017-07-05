//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(arr) {
  var longest = 0
  for (var i = 0; i < arr.length; i++) {
    if (longest < arr[i].length) longest = arr[i].length
  }
  return longest
}
// Write a function filterLongWords() that takes an array of words and an integer i 
// and returns the array of words that are longer than i.
function filterLongWords(arr, number) {
  var longWords = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > number) {
      longWords.push(arr[i])
    }
  }
  return longWords
}
/*
Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
*/
function charFreq(str) {
  str = str.split('')
  frequency = {}
  for (var i = 0; i < str.length; i++) {
    if (frequency.hasOwnProperty(str[i])) {
      frequency[str[i]]++
    } else {
      frequency[str[i]] = 1
    }
  }
  return frequency
}
