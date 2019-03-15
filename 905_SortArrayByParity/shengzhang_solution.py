class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        l_even = [i for i in A if i%2==0]
        l_odd = [i for i in A if i%2==1]
        return l_even + l_odd
        
    def sortArrayByParity(self, A):
        # or we could traverse for only once
        l_even = []
        l_odd = []
        for i in A:
            if i%2==0:
                l_even.append(i)
            else:
                l_odd.append(i)
        return l_even + l_odd
        
if __name__ == "__main__":
    A = [3,1,2,4]
    a = Solution().sortArrayByParity(A)
    print(a)
