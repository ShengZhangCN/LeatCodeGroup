function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isCousins = function(root, x, y) {
  var levelMap = new Map();
  var parentMap = new Map();

  dfs(root, null, levelMap, parentMap);

  return (
    levelMap.get(x) == levelMap.get(y) && parentMap.get(x) != parentMap.get(y)
  );
};

var dfs = (root, parent, levelMap, parentMap) => {
  if (root != null) {
    levelMap.set(root.val, parent == null ? 0 : levelMap.get(parent.val) + 1);
    parentMap.set(root.val, parent);

    dfs(root.left, root, levelMap, parentMap);
    dfs(root.right, root, levelMap, parentMap);
  }
};

module.exports = {
  TreeNode,
  isCousins
};
