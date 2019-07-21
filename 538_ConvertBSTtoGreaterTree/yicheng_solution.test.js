const { TreeNode, convertBST } = require("./yicheng_solution.js");

test("test solution", () => {
  var root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);

  var root2 = new TreeNode(5);
  root2.left = new TreeNode(6);
  root2.right = new TreeNode(3);

  expect(convertBST(root)).toEqual(root2);
});
