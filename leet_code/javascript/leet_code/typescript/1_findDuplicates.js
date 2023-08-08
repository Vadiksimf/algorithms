// Leetcode 217
function containsDuplicate(nums) {
    const checked = new Set();
    for (const el of nums) {
        if (checked.has(el))
            return true;
        checked.add(el);
    }
    return false;
}
;
console.log(containsDuplicate([1, 2, 3, 4, 5, 6]));
// Leetcode 219
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j 
// in the array such that nums[i] == nums[j] and abs(i - j) <= k.
function containsNearbyDuplicate(nums, k) {
    if (nums.length <= 1 || k == 0)
        return false;
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            if (Math.abs(numsMap.get(nums[i]) - i) <= k)
                return true;
        }
        numsMap.set(nums[i], i);
    }
    return false;
}
;
// Leetcode 220
// You are given an integer array nums and two integers indexDiff and valueDiff.
// Find a pair of indices (i, j) such that:
// i != j,
// abs(i - j) <= indexDiff.
// abs(nums[i] - nums[j]) <= valueDiff, and
// Return true if such pair exists or false otherwise.
function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
    if (nums.length <= 1)
        return false;
    if (!indexDiff && !valueDiff)
        return false;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j <= i + indexDiff; j++) {
            if ((Math.abs(i - j) <= indexDiff) && (Math.abs(nums[i] - nums[j]) <= valueDiff))
                return true;
        }
    }
    return false;
}
;
function containsNearbyAlmostDuplicate1(nums, indexDiff, valueDiff) {
    if (nums.length <= 1)
        return false;
    if (!indexDiff && !valueDiff)
        return false;
    let i = 0;
    let j = 1;
    while (i < nums.length - 1) {
        if (Math.abs(i - j) <= indexDiff) {
            if (Math.abs(nums[i] - nums[j]) <= valueDiff)
                return true;
            j++;
            continue;
        }
        i++;
        j = i + 1;
    }
    return false;
}
;
//# sourceMappingURL=1_findDuplicates.js.map