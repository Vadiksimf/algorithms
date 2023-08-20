// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    let res: number[][] = [];
    let n = intervals.length;
    let i = 0

    while (i < n) {
        let tempInterval = [intervals[i][0]];
        let end = intervals[i][1]
        i++
        while (i < n && end >= intervals[i][0]) {
            end = Math.max(intervals[i][1], end)
            i++
        }
        tempInterval.push(end)
        res.push(tempInterval)
    }

    return res
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))