var isMonotonic = function(A) {
  var isIncreasing = true;
  var isDecreasing = true;
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] > 0) {
      if (!isIncreasing) {
        return false;
      }
      isDecreasing = false;
      isIncreasing = true;
    } else if (A[i + 1] - A[i] < 0) {
      if (!isDecreasing) {
        return false;
      }
      isIncreasing = false;
      isDecreasing = true;
    } else {
      if (isDecreasing) {
        isDecreasing = true;
      } else if (isIncreasing) {
        isIncreasing = true;
      }
    }
  }

  return true;
};

module.exports = isMonotonic;
