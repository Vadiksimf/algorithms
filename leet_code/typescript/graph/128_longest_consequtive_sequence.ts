// 128. Longest Consecutive Sequence
// Medium
// 18.8K
// 877
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let longestStreak = 0;

    for (let el of set) {
        if (set.has(el - 1)) continue;
        let currStreak = 1;
        let currNumb = el + 1;

        while (set.has(currNumb)) {
            currStreak ++;
            currNumb ++;
        }

        longestStreak = Math.max(currStreak, longestStreak)
    }

    return longestStreak
};

// TC: O(n); SC: O(n)