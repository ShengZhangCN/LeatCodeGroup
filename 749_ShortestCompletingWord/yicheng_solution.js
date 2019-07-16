var shortestCompletingWord = function(licensePlate, words) {
  var plateChars = [];

  for (var i = 0; i < licensePlate.length; i++) {
    if (isChar(licensePlate.charAt(i))) {
      plateChars.push(licensePlate.charAt(i).toLowerCase());
    }
  }
  console.log(plateChars);

  var shortest = "";

  words.forEach(word => {
    if (containsAllLetters(plateChars, word)) {
      if (shortest == "") {
        shortest = word;
      }
      if (shortest.length > word.length) {
        shortest = word;
      }
    }
  });

  return shortest;
};

var isChar = char => {
  return char.match(/[a-zA-Z]/);
};

var containsAllLetters = (letters, word) => {
  var lett = letters.slice(0, letters.length);
  for (var i = 0; i < word.length; i++) {
    var index = lett.indexOf(word[i]);

    if (index != -1) {
      lett.splice(index, 1, "");
    }
  }

  for (var i = 0; i < lett.length; i++) {
    if (lett[i] != "") {
      return false;
    }
  }
  return true;
};

module.exports = shortestCompletingWord;
