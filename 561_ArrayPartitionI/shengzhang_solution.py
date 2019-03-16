class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
    # 相邻的数值尽量放在一组里面
        return sum(sorted(nums)[::2])
