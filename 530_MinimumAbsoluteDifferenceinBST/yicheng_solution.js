var getMinimumDifference = function(root) {
    var list =[];
    inorder(root, list);

    var min = Number.MAX_VALUE;

    for (var i = 0; i < list.length - 1; i++){
        min = Math.min(...[Math.abs(list[i + 1] - list[i]), min])
    }

    return min;

};

var inorder = (root, list) =>{
    if (root ==null){
        return;
    }

    inorder(root.left, list);

    list.push(root.val);

    inorder(root.right, list)

}
