var minDiffInBST = function(root) {
  var list = [];
  inOrder(root, list);

  var diff = Number.MAX_VALUE;
  for (var i = 0; i < list.length - 1; i++) {
    diff = Math.min(diff, list[i + 1] - list[i]);
  }

  return diff;
};

var inOrder = (root, list) => {
  if (root != null) {
    inOrder(root.left, list);

    list.push(root.val);

    inOrder(root.right, list);
  }
};
