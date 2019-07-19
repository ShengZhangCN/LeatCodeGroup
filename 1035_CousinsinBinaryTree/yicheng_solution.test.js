const { TreeNode, isCousins } = require("./yicheng_solution.js");

test("test solution", () => {
    var treeNode = new TreeNode(1);
    treeNode.left = new TreeNode(2);
    treeNode.right = new TreeNode(3);
    treeNode.left.left = new TreeNode(4);



    expect(isCousins(treeNode, 4, 3)).toEqual(false);

});
