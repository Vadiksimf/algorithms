// leetcode 448
function findDisappearedNumbers(nums) {
    let set = new Set(nums);
    const missing = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i))
            missing.push(i);
    }
    return missing;
}
//# sourceMappingURL=3_findDisappearedNumbers.js.map