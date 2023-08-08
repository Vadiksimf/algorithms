from collections import deque

class Solution(object):
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        q = deque()
        result = []

        for i, val in enumerate(nums):
            while q and nums[q[-1]] <= val: # remove prev element if it is less than current
                q.pop()          

            q.append(i)

            if q[0] == i - k: # chech if we need to remove the first element. We need to remove it if it is out of window
                q.popleft()

            if i >= k - 1:   # add max element to result if we have enough elements in window
                result.append(nums[q[0]]) 
        
        return result


print(Solution().maxSlidingWindow([1,12,-5,-6,50,3], 4))
print(Solution().maxSlidingWindow([0,4,0,3,2], 1))
print(Solution().maxSlidingWindow([9, 11], 2))
