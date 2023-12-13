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

class Solution1(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        unique = {}
        unique[nums[0]] = 0;

        for i in range(1, len(nums), 1):
            to_find = target - nums[i]
            if unique.has_key(to_find): 
                return [unique[to_find], i]
            unique[nums[i]] = i
        