// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The test cases are generated so that the answer can fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0

function combinationSum4(nums: number[], target: number): number {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1
    
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++){
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }

    return dp[target]
};

function combinationSum4_solution2(nums: number[], target: number): number {
    const dp = new Map();
    
    for (let i = 1; i <= target; i++) {
        dp.set(i, 0);
        let j = 0;
        while (j < nums.length) {
            const diff = i - nums[j]
            if (diff === 0) {
                dp.set(i,  dp.get(i) + 1)
            } else if (diff > 0) {
                if (dp.has(diff)) {
                    dp.set(i, dp.get(i) + dp.get(diff))
                }
            }
            j++
        }
    }

    return dp.get(target)
};
