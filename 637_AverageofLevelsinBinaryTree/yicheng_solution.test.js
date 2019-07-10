const { TreeNode, averageOfLevels } = require("./yicheng_solution.js");

test("test solution", () => {
    var treeNode = new TreeNode(3);
    treeNode.left = new TreeNode(9);
    treeNode.right = new TreeNode(20);
    treeNode.right.left = new TreeNode(15);
    treeNode.right.right = new TreeNode(7);

    expect(averageOfLevels(treeNode)).toEqual([3, 14.5, 11]);

});
