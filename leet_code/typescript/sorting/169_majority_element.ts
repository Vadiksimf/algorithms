// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

function majorityElementSortirng(nums: number[]): number {
    const sorted = nums.sort((a, b) => a - b)

    return sorted[Math.floor(nums.length / 2)]
};


function majorityElement(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    const els = new Map<number, number>()
    const majLimit = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        if (els[nums[i]] >= 1) {
            els[nums[i]] += 1
            if (els[nums[i]] > majLimit) return nums[i]
            continue
        }
        els[nums[i]] = 1
    }
};