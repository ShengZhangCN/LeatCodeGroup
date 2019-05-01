class Solution:
"""
try to minimize Max(B) and maximize min(B) separately. The smallest possible value of max(B) is max(A) - K, 
as the value max(A) cannot go lower. Similarly, the largest possible value of min(B) is min(A) + K. 
So the quantity max(B) - min(B) is at least ans = (max(A) - K) - (min(A) + K).
"""
    def smallestRangeI(self, A: List[int], K: int) -> int:
        return max(0, max(A) - min(A) - 2*K)
