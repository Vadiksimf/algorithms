# Given an integer array nums sorted in non-decreasing order, 
# return an array of the squares of each number sorted in non-decreasing order.

# Example 1:
# Input: nums = [-4,-1,0,3,10]
# Output: [0,1,9,16,100]
# Explanation: After squaring, the array becomes [16,1,0,9,100].
# After sorting, it becomes [0,1,9,16,100].

class Solution(object):
    def sortedSquares(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = [0] * len(nums)
        write_pointer = len(nums) - 1

        left_read_pointer = 0
        right_read_pointer = len(nums) - 1

        left_square = nums[left_read_pointer] ** 2
        right_square = nums[right_read_pointer] ** 2

        while write_pointer >= 0:
            if left_square > right_square:
                result[write_pointer] = left_square
                left_read_pointer += 1
                left_square = nums[left_read_pointer] ** 2
            else:
                result[write_pointer] = right_square
                right_read_pointer -=1
                right_square = nums[right_read_pointer] ** 2
            write_pointer -= 1

        return result

print(Solution().sortedSquares([-4,-1,0,3,10]))

