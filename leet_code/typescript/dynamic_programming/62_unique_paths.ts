// 62. Unique Paths
// Medium
// 15.9K
// 420 Companies
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

function uniquePaths(m: number, n: number): number {
    // Create matrix, and fill columns with 1s
    const dpMatrix = new Array(m).fill([1]);
    // Fill first row with 1s
    dpMatrix[0] = new Array(n).fill(1);
    /*
    [1, 1, 1 ...]
    [1, 2, 3 ...]
    [1, 3, 6 ...]
    */

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dpMatrix[i][j] = dpMatrix[i - 1][j] + dpMatrix[i][j - 1];
        }
    }

    return dpMatrix[m - 1][n - 1]
};

// Time Complexity: O(m * n)
// Space Complexity: O(m * n)

// Tests
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
