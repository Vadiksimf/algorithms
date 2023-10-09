# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        dict = {}

        for i, num in enumerate(nums):
            searched = target - num

            if searched in dict.keys():
                return [dict[searched], i]

            dict[num] = i
        