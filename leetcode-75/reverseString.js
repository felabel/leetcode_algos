var reverseWords = function(s) {
    let splitS = s.trim().split(/\s+/).filter(word => word !== "");
    let reversedString = ""
    for (let i = splitS.length - 1; i >= 0; i--) {

        if(i == 0){
            reversedString += (splitS[i])
        } else {
            reversedString += (splitS[i] + " ")
        }
    }
    console.log(reversedString)
    return reversedString
};

reverseWords(" Ivor     is Ugly " )