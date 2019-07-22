var firstUniqChar = function(s) {
  if (s.length == 0){
    return -1;
  }
  var sArray = s.split("");

  var map = new Map();

  sArray.forEach((item, index) => {
    if (map.has(item)) {
      map.set(item, [map.get(item)[0] + 1, index]);
    } else {
      map.set(item, [1, index]);
    }
  });

  var result = [];

  map.forEach((value, key, map) => {
    if (value[0] == 1) {
      result.push(value[1]);
    }
  });

  return result[0];
};

module.exports = firstUniqChar;
