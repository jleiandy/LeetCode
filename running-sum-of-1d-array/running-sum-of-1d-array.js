/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let results = [];
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        results.push(currentSum);
    }
    
    return results;
    
};