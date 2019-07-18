const { TreeNode, findTarget } = require("./yicheng_solution.js");

test("test solution", () => {
  var treeNode = new TreeNode(5);
  treeNode.left = new TreeNode(3);
  treeNode.right = new TreeNode(6);
  treeNode.left.left = new TreeNode(2);
  treeNode.left.right = new TreeNode(4);
  treeNode.right.right = new TreeNode(7);

  expect(findTarget(treeNode, 9)).toEqual(true);

  expect(findTarget(treeNode, 28)).toEqual(false);
});
