var detectCapitalUse = function(word) {
  if (word.toLowerCase() == word) {
    return true;
  }

  if (word.toUpperCase() == word){
    return true;
  }

  if ((word.substring(0, 1).toLowerCase() + word.substring(1)) == word.toLowerCase()){
    return true;
  }


  return false;

};

module.exports = detectCapitalUse;
