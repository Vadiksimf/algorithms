# 300. Longest Increasing Subsequence
# Companies
# Given an integer array nums, return the length of the longest strictly increasing 
# subsequence

# Example 1:

# Input: nums = [10,9,2,5,3,7,101,18]
# Output: 4
# Explanation: The longest increasing subsequence is [2,3,7,101], 
# therefore the length is 4.

class Solution:
    def lengthOfLIS(self, nums: list[int]) -> int:
        if len(nums) == 1: 
            return 1
        dp = {}
        dp[0] = 1
        ans = 0
        for i in range(1,len(nums),1):
            length = 0
            for j in range(0,i,1):
                if nums[i] > nums[j]:
                    length = max(length, dp[j]) 
            dp[i] = 1 + length
            ans = max(ans, dp[i])
        
        return ans

# test
s = Solution()
print(s.lengthOfLIS([10,9,2,5,3,7,101,18]))
