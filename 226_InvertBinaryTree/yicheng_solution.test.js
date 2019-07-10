const { TreeNode, invertTree } = require("./yicheng_solution.js");

test("test solution", () => {
    var treeNode = new TreeNode(4);
    treeNode.left = new TreeNode(2);
    treeNode.right = new TreeNode(7);
    treeNode.left.left = new TreeNode(1);
    treeNode.left.right = new TreeNode(3);
    treeNode.right.left = new TreeNode(6);
    treeNode.right.right = new TreeNode(9);


    var invert = new TreeNode(4);
    invert.left = new TreeNode(7);
    invert.right = new TreeNode(2);
    invert.left.left = new TreeNode(9);
    invert.left.right = new TreeNode(6);
    invert.right.left = new TreeNode(3);
    invert.right.right = new TreeNode(1);
    
    expect(invertTree(treeNode)).toEqual(invert);

});
