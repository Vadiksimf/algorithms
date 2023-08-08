// leetcode 136
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
function singleNumber(nums) {
    const uniques = new Set();
    const duplications = new Set();
    for (const num of nums) {
        if (uniques.has(num)) {
            duplications.add(num);
            uniques.delete(num);
        }
        else {
            uniques.add(num);
        }
    }
    return Array.from(uniques)[0];
}
;
// leetcode 137
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
function singleNumber1(nums) {
    const uniques = new Set();
    const checked = new Set();
    for (const num of nums) {
        if (!checked.has(num)) {
            uniques.add(num);
            checked.add(num);
        }
        else {
            uniques.delete(num);
        }
    }
    return Array.from(uniques)[0];
}
;
// leetcode 260
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
// Find the two elements that appear only once. You can return the answer in any order.
// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
function singleNumber2(nums) {
    const uniques = new Set();
    const checked = new Set();
    for (const num of nums) {
        if (!checked.has(num)) {
            uniques.add(num);
            checked.add(num);
        }
        else {
            uniques.delete(num);
        }
    }
    return Array.from(uniques)[0];
}
;
function singleNumber4(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    console.log(xor);
    let setBit = xor & ~xor + 1;
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & setBit) === setBit) {
            xor1 ^= nums[i];
        }
        else {
            xor2 ^= nums[i];
        }
    }
    return [xor1, xor2];
}
;
console.log(singleNumber4([2, 2, 1, 3, 3, 2]));
//# sourceMappingURL=4_singleNumber.js.map