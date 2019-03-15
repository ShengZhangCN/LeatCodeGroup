class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        #
        for i in range(len(A)):
            # first flip horizontally 
            tmp = A[i][::-1]
            for j in range(len(A[0])):
                # reverse 
                A[i][j] = int(1-tmp[j])
        return A
        # or just use one line
        #return [[1-i for i in row[::-1]] for row in A]
if __name__ == "__main__":
    A =[[1,1,0],[1,0,1],[0,0,0]]
    a = Solution().flipAndInvertImage(A)
    print(a)
