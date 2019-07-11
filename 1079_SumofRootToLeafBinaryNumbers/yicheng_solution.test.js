const { TreeNode, sumRootToLeaf } = require("./yicheng_solution.js");

test("test solution", () => {
    var treeNode = new TreeNode(1);
    treeNode.left = new TreeNode(0);
    treeNode.right = new TreeNode(1);
    treeNode.left.left = new TreeNode(0);
    treeNode.left.right = new TreeNode(1);
    treeNode.right.left = new TreeNode(0);
    treeNode.right.right = new TreeNode(1);


    expect(sumRootToLeaf(treeNode)).toEqual(22);

});
