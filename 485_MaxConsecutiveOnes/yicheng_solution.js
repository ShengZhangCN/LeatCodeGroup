var findMaxConsecutiveOnes = function(nums) {
  var max = 0;

  for (var i = 0; i < nums.length; i++) {
    var j = i;
    var curCount = 0;
    while (nums[j] == 1) {
      curCount++;
      j++;
    }

    max = Math.max(...[max, curCount]);
  }

  return max;
};

module.exports = findMaxConsecutiveOnes;
