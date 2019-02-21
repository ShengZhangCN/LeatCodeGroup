function Node(val,children) {
   this.val = val;
   this.children = children;
};

var preorder = (root) => {
    var list = [];

    return helper(root, list);
};

var helper = (root, list) =>{
    if (root == null){
        return list;
    }

    list.push(root.val);

    root.children.forEach(child => {
        list = helper(child, list);
    });

    return list;
};
