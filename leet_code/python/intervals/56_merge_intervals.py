# Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
# and return an array of the non-overlapping intervals that cover all the intervals in the input.

# Example 1:

# Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]
# Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        intervals = sorted(intervals, key=lambda x:x[0])

        result = []
        n = len(intervals)
        i = 0

        while (i < n):
            tmp = [intervals[i][0]]
            end = intervals[i][1]
            i += 1

            while (i < n and end >= intervals[i][0]):
                end = max(end, intervals[i][1])
                i += 1
            
            tmp.append(end)
            result.append(tmp)

        return result
