# 11. Container With Most Water
# You are given an integer array height of length n. There are n vertical lines drawn 
# uch that the two endpoints of the ith line are (i, 0) and (i, height[i]).

# Find two lines that together with the x-axis form a container, such that the container
# contains the most water.

# Return the maximum amount of water a container can store.

# Notice that you may not slant the container.

# 7
# |     6
# |     |     5     5           5
# |     |     |     |           |
# |     |     |     |     3     |
# |     |     |     |     |     |
# |     |     |     |     |     |     1
# |     |     |     |     |     |     |
# -----------------------------------------
#i0     1     2     3     4     5     6
# L                                <--R

# AREA = (R - L) * min(height[L], height[R])


class Solution:
    def maxArea(self, height: list[int]) -> int:
      left = 0
      right = len(height) - 1
      max_area = 0

      while left < right:
        width = right - left
        area = width * min(height[left], height[right])
        max_area = max(max_area, area)
        if height[left] < height[right]:
          left += 1
        else:
          right -= 1

      return max_area
  
# test
height = [1,8,6,2,5,4,8,3,7]
s = Solution()
print(s.maxArea(height))
      