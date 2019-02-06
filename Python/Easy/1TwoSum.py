class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        d = {}
        for i, v in enumerate(nums):
            if v in d:
                return [d[v], i]
            d[target - v] = i
