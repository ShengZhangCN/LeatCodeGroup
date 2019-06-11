class Solution:
    def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        d = []
        for i in nums:
            d += i
            
        if len(d) != r*c:
            return nums
        
        res = []
        for i in range(r):
            res.append(d[i*c:(i+1)*c])
        return res
