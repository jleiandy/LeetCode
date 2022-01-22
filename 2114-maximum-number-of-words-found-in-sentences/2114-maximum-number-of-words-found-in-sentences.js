/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    sentences.forEach((sentence) => {
        const words = sentence.split(" ")
        if (words.length > maxWords) {
            maxWords = words.length
        }
    })
    return maxWords;
};