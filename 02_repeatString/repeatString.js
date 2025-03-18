const repeatString = function(stringToRepeat, numberOfTimesToRepeatString) {
    if (numberOfTimesToRepeatString < 0) {
        return "ERROR";
    }

    let arr = [];
    let i = 0;
    while (i < numberOfTimesToRepeatString) {
        arr.push(stringToRepeat);
        i++;
    }
    let repeatedStrings = arr.toString();

    repeatedStrings = repeatedStrings.replaceAll(",", "");

    return repeatedStrings;
};

// Do not edit below this line
module.exports = repeatString;
