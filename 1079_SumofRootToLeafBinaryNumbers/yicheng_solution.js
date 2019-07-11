function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sumRootToLeaf = function(root) {
    var list = [];
    var li = [];

    list = sumRootToLeafHelper(root, list, li);
    console.log(list);
    console.log(li);

    var sum = 0;
    li.forEach(item => {
        sum += toDecimal(item);
    });
    return sum;
};

var sumRootToLeafHelper = (root, list, li) => {
    if (root == null) {
        return list;
    }

    list.push(root.val);
    list = sumRootToLeafHelper(root.left, list, li);
    list = sumRootToLeafHelper(root.right, list, li);

    if (root.left == null && root.right == null) {
        li.push(list.slice(0));
    }
    list.pop();

    return list;
};

var toDecimal = bits => {
    var sum = 0;
    for (var i = 0; i < bits.length; i++) {
        sum += bits[bits.length - i - 1] * Math.pow(2, i);
    }

    return sum;
};

module.exports = {
    TreeNode,
    sumRootToLeaf,
};
