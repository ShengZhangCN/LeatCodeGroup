var findDisappearedNumbers = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var index = Math.abs(nums[i]) - 1;

    nums[index] = -Math.abs(nums[index]);
  }

  // console.log(nums);

  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      result.push(i + 1);
    }
  }

  // console.log(result);

  return result;
};

module.exports = findDisappearedNumbers;
