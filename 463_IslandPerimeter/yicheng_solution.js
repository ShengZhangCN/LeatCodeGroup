var islandPerimeter = function(grid) {
    var perimeter = 0;
    for (var row = 0; row < grid.length; row++){
        for (var col = 0; col < grid[0].length; col++){
            var cell = grid[row][col];
            if (cell == 1){
                if (row == 0 ){
                    perimeter ++;
                }
                if (row == grid.length - 1){
                    perimeter ++;
                }

                if (col == 0){
                    perimeter ++;
                }

                if (col == grid[0].length - 1){
                    perimeter ++;
                }

                if (row - 1 >= 0 && grid[row - 1][col] == 0){
                    perimeter ++;
                }

                if (row + 1 <= grid.length - 1 && grid[row+ 1][col] ==0){
                    perimeter ++;
                }

                if (col -1 >= 0 && grid[row][col - 1] == 0){
                    perimeter++;
                }

                if (col + 1 <= grid[0].length - 1 && grid[row][col+1] == 0){
                    perimeter++;
                }

            }
        }
    }

    return perimeter;
};

var input1 = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];

console.log(islandPerimeter(input1));
