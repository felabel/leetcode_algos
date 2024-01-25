var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    
    let sumCandies = [];
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            sumCandies.push(true);
        } else {
            sumCandies.push(false);
        }
    }
    
    return sumCandies;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
