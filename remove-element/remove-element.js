/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
let i = 0
let n = nums.length
//two pointers going in opposite directions
//i is going forward searching for target values needing to be replaced
//n is going backwards searching for replacement values not equal to target val

while (i < n) {
    //check if current val needs to be swapped
    if (nums[i] === val) {
        //try swapping current val with the last
        nums[i] = nums[n-1]
        //n decrements in case the value swapped is also the target value
        n--
        //now do this loop again
        //this loop will continue until nums[n-1] is not equal to val, thus
        //nums[i] will be replaced with a value not equal to the target val
        //n will decrement whether num[n-1] is equal to target val or not, thus
        //new values will be swapped into num[i] each iteration
        //this will ensure that nums[i] will eventually be replaced with
        //a non-target value AND no copies of non-target values will be used
        //n will eventually be less than i but at this point, all the values in the front of the array
        //will have been replaced with non-target values, so no need to worry about replacing
        //nums[i] with target values
        //edge case, if array is full of target values, then n will eventually decrement below 0 and 
        //replace the entire array with undefined
    } else {
        //i increments forward only if current value is not equal to the target value         
        //thus nothing needs to be done
        i++
    }
}
    //problem asks for the number of values left after removing all target values
    //if there are no target values to be removed, n = length of original array
    //if some values are removed, n only decrements when the loop finds a value to be replaced
    //if ALL values are replaced, n will be negative and indicate the number of values removed
    return n
};

