var findTheDifference = function(s, t) {
  var sArray = s.split("");
  var tArray = t.split("");

  sArray = sArray.sort((a, b) => {
    return a.localeCompare(b);
  });
  tArray = tArray.sort();
  console.log(sArray);
  console.log(tArray);

  var i = 0;
  while (i < sArray.length && i < tArray.length) {
    if (sArray[i] != tArray[i]) {
      return tArray[i];
    }
    i++;
  }

  return tArray[tArray.length - 1];
};

module.exports = findTheDifference;
