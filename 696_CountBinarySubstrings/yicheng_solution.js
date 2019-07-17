var countBinarySubstrings = function(s) {
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    var cur = s.charAt(i);
    var j = i;
    var count = 0;
    while (j < s.length && s.charAt(j) == cur) {
      j++;
      count++;
    }

    var k = j;
    var flip = s.charAt(k);
    while (k < s.length && s.charAt(k) == flip) {
      k++;
      count--;
      if (count == 0){
        result ++;
        break;
      }
    }

  }
  return result;
};

module.exports = countBinarySubstrings;
