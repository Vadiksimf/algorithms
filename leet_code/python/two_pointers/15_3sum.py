# 15. 3Sum

# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such 
# that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.


# 1. Sort
# 2. Find the targer and make 2sum
# A + B + C = 0  => B + C = -A
# 3. Use two pointers to find the target
# -4, -1, -1, 0, 1, 2
#  i | L            R


class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        nums.sort()
        for i in range(len(nums) - 2):
            if i != 0 and nums[i] == nums[i - 1]:
                continue
            
            left = i + 1
            right = len(nums) - 1
            target = 0 - nums[i]
            
            while left < right:
                two_sum = nums[left] + nums[right]

                if target == two_sum:
                    result.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]: 
                        left += 1
                    while right > left and nums[right] == nums[right - 1]: 
                        right -= 1
                    left += 1
                    right -= 1
                elif target > two_sum:
                    left += 1
                else:
                    right -= 1
            
        return result
    
s = Solution()
# test
nums = [-1,0,1,2,-1,-4]
print(s.threeSum(nums))

# test 2
nums = [0,0,0,0]
print(s.threeSum(nums))

# test 3
nums = []
print(s.threeSum(nums))

# test 4
nums = [0,0,0]
print(s.threeSum(nums))
        