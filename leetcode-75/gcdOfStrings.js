var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    console.log(str1 + str2)
    console.log(str2 + str1)
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const length = gcd(str1.length, str2.length);

    return str1.substring(0, length);
};

console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"));
