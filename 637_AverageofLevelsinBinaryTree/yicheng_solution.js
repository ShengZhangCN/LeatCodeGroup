function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var averageOfLevels = function(root) {
    var traversal = levelOrderTraversal(root);

    var average = [];
    traversal.forEach(level => {
        var sum = 0;
        level.forEach(item=>{
            sum += item;
        })

        average.push(sum / level.length);
    });

    return average;
};

var levelOrderTraversal = root => {
    var level = [];
    var result = [];
    if (root == null) {
        return [];
    }

    level.push(root);

    while (level.length != 0) {
        var values = [];
        var curLevel = [];

        while (level.length != 0){
            var root = level.shift();
            values.push(root.val);

            if (root.left != null) {
                curLevel.push(root.left);
            }
            if (root.right != null) {
                curLevel.push(root.right);
            }
        }

        result.push(values);
        level = curLevel;
    }

    return result;
};

module.exports = {
    TreeNode,
    averageOfLevels,
};
