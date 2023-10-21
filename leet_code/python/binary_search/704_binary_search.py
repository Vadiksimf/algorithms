# Given an array of integers nums which is sorted in ascending order, and an integer 
# target, write a function to search target in nums. 
# If target exists, then return its index. Otherwise, return -1.

# You must write an algorithm with O(log n) runtime complexity.


class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        start = 0
        end = len(nums) - 1

        while start <= end:
            middle = (end + start) // 2
            if nums[middle] == target: 
                return middle
            if nums[middle] > target:
                end = middle - 1
            else:
                start = middle + 1

        return -1

class SolutionRecoursive(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        def binary_search(left, right):
            if left > right: 
                return -1

            middle = (left + right) // 2

            if nums[middle] == target: 
                return middle

            if nums[middle] > target:
                return binary_search(left, middle - 1)
            else:
                return binary_search(middle + 1, right)
            
        return binary_search(0, len(nums) - 1)


print(SolutionRecoursive().search([-1,0,3,5,9,12], 9))
print(SolutionRecoursive().search([-1,0,3,5,9,12], 2))
print(SolutionRecoursive().search([2], 2))
