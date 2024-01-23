/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function(word1, word2) {
    let newWord =  word1.split('');
    let newWord2 = word2.split('');
    
    let mergedString = '';
    let maxLength = Math.max(newWord.length, newWord2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < newWord.length) {
            mergedString += newWord[i];
        }
        if (i < newWord2.length) {
            mergedString += newWord2[i];
        }
    }

    console.log(mergedString);
    return mergedString;
};

mergeAlternately("hello", "fine")