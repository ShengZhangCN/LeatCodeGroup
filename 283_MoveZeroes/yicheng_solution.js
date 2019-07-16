var moveZeroes = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      var right = i;
      while (nums[right] == 0 && right < nums.length ) {
        right++;
      }
      if (right == nums.length){
        break;
      }
      var temp = nums[right];
      nums[i] = temp;
      nums[right] = 0;
    }
  }
  return nums;
};

module.exports = moveZeroes;
