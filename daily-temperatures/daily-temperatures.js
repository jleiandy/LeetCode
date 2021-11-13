/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answers = []
    
    for (let i = 0; i < temperatures.length; i++) {
        let counter = 1;
        for (let j = i + 1; j < temperatures.length + 1; j++) {
            if (temperatures[j] > temperatures[i]) {
                answers.push(counter)
                break
            } else if (temperatures[j] === undefined) {
                answers.push(0)
                break
            } else {
                counter++
            }
        }
    }
    
    return answers
};