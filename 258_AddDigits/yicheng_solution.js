var addDigits = function(num) {
  var sum = 0;
  while (num != 0){
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (Math.floor(sum / 10) == 0){
    return sum;
  }

  return addDigits(sum);

};

module.exports = addDigits;
