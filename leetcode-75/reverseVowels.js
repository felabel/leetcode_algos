/**
 * reverseVowels - a function that reverses the vowels in a string
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU";
    let reversedString = "";

    let arr = s.split("");  
    let vowelArray = arr.filter(char => vowels.includes(char));

    vowelArray.reverse();

    for (let i = 0, j = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = vowelArray[j];
            j++;
        }
    }

    reversedString = arr.join("");

    return reversedString;
};

console.log(reverseVowels("hello"));
