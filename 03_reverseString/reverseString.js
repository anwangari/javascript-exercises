const reverseString = function(inputString) {
    let reversedString = "";
    let strLenth = inputString.length;
    
    while ((strLenth > 0)) {
        reversedString += inputString[strLenth - 1]
        strLenth--
    };
    return reversedString;
};

reverseString("Hello")

// Do not edit below this line
module.exports = reverseString;
