var projectionArea = function(grid) {
    var sum = 0;

    var twoDSum = 0;
    grid.forEach(row =>{
        row.forEach(col =>{
            if (col != 0){
                twoDSum ++;
            }
        })
    })

    var rowMax = grid.map(r => {
        return Math.max.apply(Math, r);
    });
    console.log(rowMax);

    var rowSum = 0;
    rowMax.forEach(item => {
        rowSum += item;
    })


    var colMax =[];

    for (var i = 0; i < grid.length; i++){
        colMax.push(-1);
    }

    for (var i = 0; i < grid.length; i++){
        for (var j = 0; j < grid[0].length; j++){
            colMax[j] = Math.max(colMax[j],grid[i][j]);
        }
    }
    console.log(colMax);
    var colSum = 0;

    colMax.forEach(item => {
        colSum += item;
    });

    sum += rowSum;
    sum += colSum;
    sum += twoDSum;

    return sum;

};

var input1 = [[2]];
var input2 = [[1,0],[0,2]];
var input3 = [[1,1,1],[1,0,1],[1,1,1]];

console.log(projectionArea(input1));
console.log(projectionArea(input2));
console.log(projectionArea(input3));
