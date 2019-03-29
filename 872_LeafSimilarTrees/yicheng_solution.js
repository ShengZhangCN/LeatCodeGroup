function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var leafSimilar = function(root1, root2) {
    var leaf1 = getLeaf(root1, []);
    var leaf2 = getLeaf(root2, []);

    return (leaf1.length == leaf2.length) && (leaf1.every((item, index) =>{
        return item === leaf2[index];
    }));

};


var getLeaf = (root, list) => {
    if (root == null) {
        return list;
    }

    if (root.left == null && root.right == null) {
        list.push(root.val);
    }

    if (root.left != null) {
        list.concat(getLeaf(root.left, list));
    }
    if (root.right != null) {
        list.concat(getLeaf(root.right, list));
    }

    return list;

}

var root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
root1.right.left = new TreeNode(9);
root1.right.right = new TreeNode(8);


console.log(getLeaf(root1, []));
