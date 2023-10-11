class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        min_val = nums[0]
        max_val = nums[0]
        res = nums[0]

        for i in range(1, len(nums), 1):
            if nums[i] == 0:
                min_val = 1
                max_val = 1
                res = max(nums[i], res)
                continue
                
            next_max = max_val * nums[i]
            next_min = min_val * nums[i]
            min_val = min(next_min, next_max, nums[i])
            max_val = max(next_min, next_max, nums[i])
            res = max(res, max_val, min_val)

        return res

# test
nums = [2,3,-2,4]
s = Solution()
print(s.maxProduct(nums))
