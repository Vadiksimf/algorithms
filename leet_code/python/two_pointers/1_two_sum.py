class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        dictionary = dict()
        for i, val in enumerate(nums): 
            dictionary[val] = i

        for i, val in enumerate(nums):
            second_el = target - val
            j = dictionary.get(second_el)
            if j and i != j:
                return [i, j]

        return []


# Brute force solution
class SolutionBrute(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        for i in range (0, len(nums) - 1):
            for j in range (i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]

        return []


print(Solution().twoSum([12,2,7,11,15], 9))
print(Solution().twoSum([2,7], 9))
print(Solution().twoSum([-1,-2,-3,-4,-5], -8))
