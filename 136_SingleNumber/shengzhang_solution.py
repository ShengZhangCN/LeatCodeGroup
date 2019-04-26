from collections import Counter
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        c = Counter(nums)
        # customize min() function, set which element to compare by 'key' parameter.  
        res, idx = min(c.items(), key=lambda x: x[1])
        return res
    
