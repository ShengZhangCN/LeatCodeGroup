var gcdOfStrings = function(str1, str2) {
  var shorterStr;
  var longerStr;
  if (str1.length < str2.length) {
    shorterStr = str1;
    longerStr = str2;
  } else {
    shorterStr = str2;
    longerStr = str1;
  }

  var result = "";
  for (var i = 0; i < shorterStr.length; i++) {
    // console.log(shorterStr.substring(0, i + 1));
    if (
      isDivisable(longerStr, shorterStr.substring(0, i + 1)) &&
      isDivisable(shorterStr, shorterStr.substring(0, i + 1))
    ) {
      // if (result.length < shorterStr.substring(0, i+1)){
        result = shorterStr.substring(0, i + 1);
      // }
    }
  }

  return result;
};

var isDivisable = (str, char) => {
  while (str.length != 0) {
    var index = str.indexOf(char);
    if (index != 0) {
      return false;
    }

    str = str.substring(char.length);
  }

  return true;
};

module.exports = gcdOfStrings;
