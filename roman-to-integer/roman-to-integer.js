/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i+1] === 'V') {
            count += 4
            i++
            continue
        }
        if (s[i] === 'I' && s[i+1] === 'X') {
            count += 9
            i++
            continue
        }
        if (s[i] === 'X' && s[i+1] === 'L') {
            count += 40
            i++
            continue
        }
        if (s[i] === 'X' && s[i+1] === 'C') {
            count += 90
            i++
            continue
        }
        if (s[i] === 'C' && s[i+1] === 'D') {
            count += 400
            i++
            continue
        }
        if (s[i] === 'C' && s[i+1] === 'M') {
            count += 900
            i++
            continue
        }
        if (s[i] === 'I') {
            count += 1
            continue
        }
        if (s[i] === 'V') {
            count += 5
            continue
        }
        if (s[i] === 'X') {
            count += 10
            continue
        }
        if (s[i] === 'L') {
            count += 50
            continue
        }
        if (s[i] === 'C') {
            count += 100
            continue
        }
        if (s[i] === 'D') {
            count += 500
            continue
        }
        if (s[i] === 'M') {
            count += 1000
            continue
        }
    }
    return count
};