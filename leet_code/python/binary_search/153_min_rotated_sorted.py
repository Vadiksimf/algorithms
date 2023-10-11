# 153. Find Minimum in Rotated Sorted Array

# Suppose an array of length n sorted in ascending order is rotated between 1 and n 
# times. For example, the array nums = [0,1,2,4,5,6,7] might become:

# [4,5,6,7,0,1,2] if it was rotated 4 times.
# [0,1,2,4,5,6,7] if it was rotated 7 times.
# Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the 
# array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

# Given the sorted rotated array nums of unique elements, return the minimum element 
# of this array.

# You must write an algorithm that runs in O(log n) time.



import math

class Solution:
    def findMin(self, nums: list[int]) -> int:
        # base cases
        if len(nums) == 1: 
            return nums[0]
        if len(nums) == 2: 
            return min(nums[0], nums[1])
        if nums[0] < nums[len(nums) - 1]: 
            return nums[0]

        left = 0
        right = len(nums) - 1

        while left <= right:
            middle = math.floor((left + right) / 2)

            if nums[middle] > nums[middle + 1]:
                return nums[middle + 1]
            if nums[middle - 1] > nums[middle]:
                return nums[middle]

            if nums[left] > nums[middle]:
                right = middle - 1
            else:
                left = middle + 1
        
        return 0
    
# test
nums = [5,6,1,2,3,4]
s = Solution()
print(s.findMin(nums))
