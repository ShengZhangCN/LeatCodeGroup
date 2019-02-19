function TreeNode (val){
    this.val = val;
    this.left = null;
    this.right = null;
};

var isUnivalTree = (root) =>{
    if (root == null){
        return true;
    }

    return helper(root.left, root.val) && helper(root.right, root.val);
};

var helper = (root, parentVal) =>{
    if (root == null){
        return true;
    }

    if (root.val != parentVal){
        return false;
    }

    if (root.left == null && root.right == null){
        return root.val == parentVal;
    }

    return helper(root.left, root.val) && helper(root.right, root.val);
};

var t1 = new TreeNode(1);
t1.left = new TreeNode(1);
t1.right = new TreeNode(1);
t1.left.left = new TreeNode(1);
t1.left.right = new TreeNode(1);
t1.right.right = new TreeNode(1);

var t2 = new TreeNode(2);
t2.left = new TreeNode(2);
t2.right = new TreeNode(2);
t2.left.left = new TreeNode(5);
t2.left.right = new TreeNode(2);

var t3 = new TreeNode(8);
t3.right = new TreeNode(8);
t3.right.left = new TreeNode(8);
t3.right.left.left = new TreeNode(9);
t3.right.left.right = new TreeNode(8);

console.log(isUnivalTree(t1));
console.log(isUnivalTree(t2));
console.log(isUnivalTree(t3));
