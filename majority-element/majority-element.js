/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const limit = nums.length/2
    
    let storage = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in storage)) {
            storage[nums[i]] = 1
        } else {
            storage[nums[i]] += 1
        }
        
        if (storage[nums[i]] > limit) {
            return nums[i]
        }
    }
    
};