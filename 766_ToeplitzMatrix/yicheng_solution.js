var isToeplitzMatrix = function(matrix) {
    var list = [];
    var col = matrix.length - 1;
    for (var row = 0; row < matrix[0].length; row++) {
        var curList = [];
        curList.push(matrix[col][row]);

        var curRow = row - 1;
        var curCol = col - 1;
        while (curRow >= 0 && curCol >= 0) {
            curList.push(matrix[curCol][curRow]);
            curRow--;
            curCol--;
        }

        list.push(curList);
    }

    var row =  matrix[0].length - 1;

    for (var col =  matrix.length - 2; col >= 0; col --) {
        var curList = [];
        curList.push(matrix[col][row]);

        var curRow = row - 1;
        var curCol = col - 1;
        while (curRow >= 0 && curCol >= 0) {
            curList.push(matrix[curCol][curRow]);
            curRow--;
            curCol--;
        }

        list.push(curList);
    }


    console.log(list);
    var result = true;
    list.forEach(l => {
        if (!isAllSameInArray(l)){
            result = false;
            return;
        }
    })

    return result;
    console.log(list);
};

var isAllSameInArray = (array) => {
    var lastItem = array[0];
    var result = true;
    array.forEach(item => {

        if (item != lastItem) {
            result = false;
            return;
        }
        lastItem = item;
    });

    return result;
}

var input1 = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
];
var input2= [
    [1,2],
    [2,2]];

var input3 =
[[44,35,39],
[15,44,35],
[17,15,44],
[80,17,15],
[43,80,0],
[77,43,80]];

// console.log(isAllSameInArray([1, 2]));

console.log(isToeplitzMatrix(input3));
