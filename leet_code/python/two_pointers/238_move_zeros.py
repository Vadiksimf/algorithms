# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        i = 0
        lastIndex = len(nums)

        while i < lastIndex:
            if nums[i] == 0: 
                lastIndex -= 1
                nums.append(nums[i])
                del nums[i]
            else:
                i += 1

        return nums
        

print(Solution().moveZeroes([0,1,0,3,12]))
print(Solution().moveZeroes([0]))
print(Solution().moveZeroes([0,1,0]))
print(Solution().moveZeroes([0,0,1]))
print(Solution().moveZeroes([1]))
