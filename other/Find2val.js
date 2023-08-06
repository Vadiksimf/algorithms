/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = {}
    nums.forEach((el, i) => map[el] = i)
    let a = null;
    let i = 0
    
    
   while (!a) {
       const b = target - nums[i]
       if (map[b] && map[b] !== i) {
           a = map[b]
           break;
        }
       i += 1
   }
    
    return [i, a]
};

console.log(twoSum([2,1,1,1,1,1,2,5], 4))