/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    
    let numString = x.toString()
    
    for(let i = 0; i < numString.length/2; i++) {
        if (numString[i] !== numString[numString.length - 1 - i]) {
            return false
        }
    }
    
    return true
    
};