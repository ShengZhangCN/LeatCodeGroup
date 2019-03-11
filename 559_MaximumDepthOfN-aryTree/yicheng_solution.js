function Node(val,children) {
    this.val = val;
    this.children = children;
};

var maxDepth = function(root) {
    if (root == null){
        return 0;
    }

    // Remember to initialize the list with 1 
    var list = [1];

    root.children.forEach(child => {
        list.push(maxDepth(child) + 1);
    });
    console.log(list);

    return Math.max(...list);
};

var node = new Node(1, []);
node.children.push(new Node(2, []), new Node(3, []));

console.log(maxDepth(node));
