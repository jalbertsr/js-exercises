function translate (str) {
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

function sum (operators) {
  var totalSum = 0
  for (var i = 0; i < operators.length; i++) {
    totalSum += operators[i]
  }
  return totalSum
}

function multiply (operators) {
  var totalSum = 1
  for (var i = 0; i < operators.length; i++) {
    totalSum *= operators[i]
  }
  return totalSum
}

// WAY 1
function reverse (str) {
  return str.split('').reverse().join(' ')
}

// WAY 2

function reverse (str) {
  return str.map()
}

function translete (str) {
  var translator = { 'merry': 'god', 'christmas': 'jul', 'and': 'och', 'happy': 'gott', 'new': 'nytt', 'year': 'år' }
  str = str.split(' ')

  for (var i = 0; i < str.length; i++) {
    Object.keys(translator).forEach(function (key) {
      if (key === str[i]) {
        str[i] === translator[key]
      }
    })
  }
  return str.join('')
}

function findLongestWord (arr) {
  var longest = 0
  for (var i = 0; i < arr.length; i++) {
    if (longest < arr[i].length) longest = arr[i].length
  }
  return longest
}

function filterLongWords (arr, number) {
  var longWords = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > number) {
      longWords.push(arr[i])
    }
  }
  return longWords
}

function charFreq (str) {
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

 
