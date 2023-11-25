// 55. Jump Game
// Medium
// 18.2K
// 1.1K
// Companies
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

function canJump(nums: number[]): boolean {
    let reachable = 0;
  
    for (let i = 0; i < nums.length && i <= reachable; i++) {
      reachable = Math.max(reachable, i + nums[i]);
      if (reachable >= nums.length - 1) return true;
    }
  
    return false;
  };

// Time Complexity: O(n)
// Space Complexity: O(1)

// Tests
console.log(canJump([2,3,1,1,4])); // true
console.assert(false, canJump([3,2,1,0,4])); // false
console.log(canJump([0])); // true
console.log(canJump([1, 0])); // true

