function Node(val,children) {
    this.val = val;
    this.children = children;
};

var postorder = (root) => {
    var list = [];

    return helper(root, list);
};

var helper = (root, list) =>{
    if (root == null){
        return list;
    }

    root.children.forEach(child => {
        list = helper(child, list);
    });

    list.push(root.val);


    return list;
};
