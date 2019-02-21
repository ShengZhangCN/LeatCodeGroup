function TreeNode (val){
    this.val = val;
    this.left = null;
    this.right = null;
};

var searchBST = (root, val) =>{
    if (root == null){
        return null;
    }

    if (val == root.val){
        return root;
    }

    if (val < root.val){
        return searchBST(root.left, val);
    }

    return searchBST(root.right, val);
};
