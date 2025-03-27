const sumAll = function(firstNumber, secondNumber) {
    let largerNumber = secondNumber;

    function sum(number1, number2) {
        let total = 0;
        for (i = number1; i < (number2 + 1); i++) {
            total += i;
        };
        return total;
    };

    if (
        ((firstNumber > 0 && largerNumber > 0)) &&
        (Number.isInteger(firstNumber) && Number.isInteger(largerNumber))
    ) {
        if (firstNumber > largerNumber) {
            largerNumber = firstNumber;
            firstNumber = secondNumber;
        };
    
        let totalSum = sum(firstNumber, largerNumber)
        return totalSum

    } else {
        return "ERROR"
    };
};

sumAll(1, 5)

// Do not edit below this line
module.exports = sumAll;
