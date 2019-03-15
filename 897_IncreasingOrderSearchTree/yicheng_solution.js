function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var increasingBST = function(root) {
    var inorderList = inorder(root, []);

    if (inorderList.length == 0){
        return null;
    }

    var newRoot = new TreeNode(inorderList[0]);
    var dummy = newRoot;
    for (var i = 1; i < inorderList.length; i++){
        dummy.right = new TreeNode(inorderList[i]);
        dummy = dummy.right;
    }
    return newRoot;
};

var inorder = (root, list) => {
    if (root == null){
        return list;
    }

    list = inorder(root.left, list);

    list.push(root.val);

    list = inorder(root.right, list);

    return list;
};

var input = new TreeNode(1);
input.left = new TreeNode(2);
input.right= new TreeNode(3);

console.log(inorder(input, []));
