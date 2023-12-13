class Solution(object):
    def insert(self, intervals, newInterval):
        """
        :type intervals: List[List[int]]
        :type newInterval: List[int]
        :rtype: List[List[int]]
        """
        result = []
        i = 0
        n = len(intervals)

        # fill left part of resulting list
        while (i < n and intervals[i][1] < newInterval[0]):
            result.append(intervals[i])
            i += 1

        # find new interval to insert. Merge all collapsing intervals
        while (i < n and newInterval[1] >= intervals[i][0]) :
            start_time = min(intervals[i][0], newInterval[0])
            end_time = max(intervals[i][1], newInterval[1])
            newInterval[0] = start_time
            newInterval[1] = end_time
            i += 1
        result.append(newInterval)

        # fill right part of resulting list
        while (i < n):
            result.append(intervals[i])
            i += 1

        return result
        