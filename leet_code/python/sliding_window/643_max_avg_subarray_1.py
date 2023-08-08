# Sliding window approach
class Solution:
    def findMaxAverage(self, nums, k):
        if len(nums) == 1 or k == 1: return max(nums)

        curr_sum = sum(nums[:k])
        max_sum = curr_sum

        for i in range(k, len(nums)):
            curr_sum = curr_sum + nums[i] - nums[i - k]
            max_sum = max(curr_sum, max_sum)

        return max_sum / k


Solution().findMaxAverage([1,12,-5,-6,50,3], 4)
Solution().findMaxAverage([0,4,0,3,2], 1)
