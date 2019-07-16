var rotatedDigits = function(N) {
  var result = [];
  for (var i = 1; i <= N; i++) {
    if (isGood(i)) {
      result.push(i);
    }
  }

  return result.length;
};

var isGood = num => {
  var origNum = num;

  var rotatedNum = 0;

  var i = 0;
  while (num != 0) {
    var mod = num % 10;

    num = Math.floor(num / 10);

    if (mod == 2) {
      mod = 5;
    } else if (mod == 5) {
      mod = 2;
    } else if (mod == 6) {
      mod = 9;
    } else if (mod == 9) {
      mod = 6;
    }
    else if (mod == 3 || mod == 4 || mod == 7){
      return false;
    }

    rotatedNum += mod * Math.pow(10, i);
    i++;
  }

  return rotatedNum != origNum;
};

module.exports = rotatedDigits;
