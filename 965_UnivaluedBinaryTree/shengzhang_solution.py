class Solution:
    def sortArrayByParityII(self, A: List[int]) -> List[int]:
        if len(A) == 0:
            return []
        A = sorted(A)
        l_odd = [ i for i in A if i % 2 == 1]
        l_even = [i for i in A if i % 2 == 0]
        ans = []
        for i in range(len(l_odd)):
            ans.append(l_even[i])
            ans.append(l_odd[i])
        return ans
