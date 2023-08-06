// leetconde 268
// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
function missingNumber(nums: number[]): number {
    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== i) return i;
    }

    return sorted[sorted.length - 1] + 1
};

function missingNumber1(nums: number[]): number {
    const length = nums.length;
    const fact = nums.reduce((acc, num) => acc + num);
    // progression (1...n) = n*(n+1)/2
    const theoretical = length * (length + 1) / 2;
    return theoretical - fact;
};


