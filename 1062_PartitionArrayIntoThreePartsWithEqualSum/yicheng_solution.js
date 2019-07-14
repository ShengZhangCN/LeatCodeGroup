var canThreePartsEqualSum = function(A) {
  var sum = 0;

  A.forEach(item => {
    sum += item;
  });

  if (sum % 3 != 0) {
    return false;
  }

  var sumEach = sum / 3;

  console.log(sumEach);

  var sum1 = 0;
  var part1 = 0;
  for (var i = 0; i < A.length; i++) {
    sum1 += A[i];
    if (sum1 == sumEach) {
      part1 = i;
      break;
    }
  }

  console.log(part1);

  var sum2 = 0;
  var part2 = 0;
  for (var j = part1 + 1; j < A.length; j++) {
    sum2 += A[j];
    if (sum2 == sumEach) {
      part2 = j;
      break;
    }
  }

  console.log(part2);

  if (part2 - 1 < part1) {
    return false;
  }

  var sum3 = 0;
  for (var k = part2 + 1; k < A.length; k++) {
    sum3 += A[k];
  }

  if (sum3 != sumEach) {
    return false;
  }

  return true;
};

module.exports = canThreePartsEqualSum;
