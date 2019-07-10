var matrixReshape = function(nums, r, c) {
    var rowTraverse = [];

    nums.forEach(row => {
        row.forEach(item =>{
            rowTraverse.push(item);
        });
    });

    if (r * c != rowTraverse.length){
        return nums;
    }

    var result = [];
    for (var i = 0; i < r; i++){
        result.push([]);
    };

    for (var i = 0; i < r * c; i++){
        // console.log(i / c);
        result[Math.floor(i / c)].push(rowTraverse[i]);
    }

    return result;

};

module.exports = matrixReshape;
