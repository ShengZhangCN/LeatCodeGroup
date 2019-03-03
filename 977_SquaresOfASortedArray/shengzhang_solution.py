class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        for i in range(len(A)):
            # calculate the square
            A[i] = A[i]*A[i]
            # sort the res
        A.sort()
        return A
        
        
if __name__ == '__main__':
    A = [-4,-1,0,3,10]
    ans = Solution().sortedSquares(A)
    print(ans)
