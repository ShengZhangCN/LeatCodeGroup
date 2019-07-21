function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  var left = 0;
  var right = nums.length - 1;
  return helper(nums, left, right);
};

var helper = (nums, left, right) => {
  var root = null;
  if (left > right) {
    return root;
  }

  var mid = Math.ceil(left + (right - left) / 2);
  root = new TreeNode(nums[mid]);
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);

  return root;
};

module.exports = {
  sortedArrayToBST,
  TreeNode
};
