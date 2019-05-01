class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        # count the number of neighbors of the 1-valued cell  
        p = 0   # the perimeter
        dx, dy = [-1, 1], [-1,1]
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    # count the '1' neighbors in rows
                    neighbors1 = [grid[i][j + y]==1 for y in dy if 0<= j + y < n]
                    # counter the '1' neighbors in columns
                    neighbors2 = [grid[i + x][j]==1 for x in dx if 0<= i + x < m]
                    p += 4 - sum(neighbors1 + neighbors2)
        return p
