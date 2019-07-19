function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findTarget = function(root, k) {
  var inorder = inOrder(root, []);

  var left = 0,
    right = inorder.length - 1;

  while (left < right) {
    if (inorder[left] + inorder[right] < k) {
      left++;
    } else if (inorder[left] + inorder[right] > k) {
      right--;
    } else {
      return true;
    }
  }

  return false;
};

var inOrder = (root, list) => {
  if (root == null) {
    return list;
  }

  inOrder(root.left, list);
  list.push(root.val);
  inOrder(root.right, list);
  return list;
};

module.exports = {
  TreeNode,
  findTarget
};
