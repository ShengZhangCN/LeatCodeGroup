function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sum = 0;

var convertBST = function(root) {
  if (root != null) {
    convertBST(root.right);
    console.log("root val " + root.val);
    sum = sum + root.val;
    root.val = sum;
    console.log("sum " + sum);

    convertBST(root.left);
  }
  return root;
};

module.exports = {
  TreeNode,
  convertBST
};
