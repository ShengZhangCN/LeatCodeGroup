var surfaceArea = function(grid) {
    var area = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] != 0) {
                area += 2;
            }

            if (i - 1 >= 0) {
                area += Math.max(grid[i - 1][j] - grid[i][j], 0);
            } else {
                area += grid[i][j];
            }

            if (i + 1 <= grid.length - 1) {
                area += Math.max(grid[i + 1][j] - grid[i][j], 0);
            } else {
                area += grid[i][j];
            }

            if (j - 1 >= 0) {
                area += Math.max(grid[i][j - 1] - grid[i][j], 0);
            } else {
                area += grid[i][j];
            }

            if (j + 1 <= grid[0].length - 1) {
                area += Math.max(grid[i][j + 1] - grid[i][j], 0);
            } else {
                area += grid[i][j];
            }
        }
    }

    return area;
};

module.exports = surfaceArea;
