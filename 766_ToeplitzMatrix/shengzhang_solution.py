class Solution:
    # compare the current row except the last element with the next row except the first element.
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        for i in range(1, len(matrix)):
            if matrix[i][1:] != matrix[i-1][:-1]:
                return False
        return True
