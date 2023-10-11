class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        curr = nums[0]
        max_val = nums[0]
        for i in range(1, len(nums), 1):
            sum = curr + nums[i]
            curr = max(nums[i], sum)
            max_val = max(curr, max_val)
        
        return max_val
     
# test
nums = [-2,1,-3,4,-1,2,1,-5,4]
s = Solution()
print(s.maxSubArray(nums))
        