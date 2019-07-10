function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var invertTree = function(root) {
    if (root == null || (root.left == null && root.right == null)){
        return root;
    }

    var left = root.left;
    var invertLeft =invertTree(left);

    // var left = invertTree(root.left);
    var right = root.right;
    var invertRight =invertTree(right);

    root.left = invertRight;
    root.right = invertLeft;

    // root.right = left;
    // var right = invertTree(right);

    // root.left= right;
    // root.right = left;

    return root;
};

module.exports = {
    TreeNode,
    invertTree,
};
