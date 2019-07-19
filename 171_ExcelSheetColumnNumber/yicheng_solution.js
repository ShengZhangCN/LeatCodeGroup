var titleToNumber = function(s) {
  var map = {
    A: 1
  };

  for (var i = 1; i < 26; i++) {
    map[String.fromCharCode("A".charCodeAt(0) + i)] = i + 1;
  }

  var num = 0;
  for (var i = 0; i < s.length; i++) {
    if (i == s.length - 1) {
      num += map[s.charAt(i)];
    } else {
      num += map[s.charAt(i)] * Math.pow(26 , (s.length - 1 - i));
    }
  }

  return num;
};

module.exports = titleToNumber;
