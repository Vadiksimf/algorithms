# 33. Search in Rotated Sorted Array


# There is an integer array nums sorted in ascending order (with distinct values).

# Prior to being passed to your function, nums is possibly rotated at an unknown pivot 
# index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], 
# ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, 
# [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

# Given the array nums after the possible rotation and an integer target, return the 
# ndex of target if it is in nums, or -1 if it is not in nums.

# You must write an algorithm with O(log n) runtime complexity.


import math

class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while right >= left:
            mid = math.floor((right + left)/ 2)

            if nums[mid] == target:
                return mid
            
            if nums[left] <= nums[mid]: # left to middle
                if nums[mid] > target and nums[left] <= target:
                    right = mid - 1
                else: 
                    left = mid + 1
            else: # middle to right
                if nums[mid] < target and nums[right] >= target:
                    left = mid + 1
                else:
                    right = mid - 1

        return -1
        

# test
nums = [4,5,6,7,0,1,2]
target = 0
s = Solution()
print(s.search(nums, target))

# test 1
nums = [1,3]
target = 3
s = Solution()
print(s.search(nums, target))

# test 2
nums = [3,1]
target = 1
s = Solution()
print(s.search(nums, target))

# test 3
nums = [5,3,1]
target = 5
s = Solution()
print(s.search(nums, target))
        