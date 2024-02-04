/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // adjacent is i+1
    // 0 means empty and can be placed, 
    //  look through the array, target i+even that is 0, return true
    // you have to spread n across the available space
    // find the available space
    let availableSpace
    for (let i = 0; i < flowerbed.length; i += 2) {
        availableSpace = i + 2;
        
        console.log(availableSpace)
    }
    
};

console.log(canPlaceFlowers([1,0,0,0,1],1))