/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0) {
        return 0
    }
    
    if (n === 1) {
        return 1
    }
    
    if (n === 2) {
        return 2
    }
    
    let numWays = new Array(n+1)

    numWays[1] = 1
    numWays[2] = 2
    
    for (let i = 3; i <= n; i++) {
        numWays[i] = numWays[i - 1] + numWays[i - 2]
    }
    
    return numWays[n]
};