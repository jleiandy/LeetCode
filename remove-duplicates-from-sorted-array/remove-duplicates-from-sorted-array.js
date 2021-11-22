/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // start at second value in array because the first value is by definition the first unique value.
    let i = 1
    let k = 1
    
    //iterate through array 
    while (i < nums.length) {
        // i looks behind and sees if the values are different
        // if they are, then this indicates we no longer have to worry about them
        // increment j (which is the pointer for unique values) and replace nums[j] with nums[i++]
        // this ensures nums[j] is now a value we have not looked at yet, it doesn't matter if 
        // the value is unique or not, we will check on the next iteration
        // the first iteration, the array will not change because j++ == i++
        // however, if there are duplicates, i will start to move ahead of j
        if (nums[i] != nums[i - 1]) {
            nums[k++] = nums[i++]
        // if the current and previous value are equal, increment i to continue search for unique values.
        } else {
            i++
        } 
    }
    // j is equal to the number of unique values, starts at 1 (assuming atleast one number in array) and only 
    // increments when another unique value is found via line 16
    return k
    
    // this approach will leave trailing duplicates, but the problem states we do not care about
    // what is beyond the first k unique elements
    
};