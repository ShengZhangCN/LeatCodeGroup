class Solution:
    def transpose(self, A: List[List[int]]) -> List[List[int]]:
        """
        The input might not be a square matrix.
        """
        l = len(A)
        B = []
        for i in range(len(A[0])):
            tmp = []
            for j in range(len(A)):
                tmp.append(A[j][i])
            B.append(tmp)
            
        return B
