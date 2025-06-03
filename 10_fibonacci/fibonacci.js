const fibonacci = function(n) {
    let fibonacci_number = parseInt(n);

    if (fibonacci_number < 0) return "OOPS";
    if (fibonacci_number === 0) return 0;
    if (fibonacci_number === 1) return 1;

    let fibonacci_sum = 0;
    let num1 = 0;
    let num2 = 1;

    for (let i = 2; i <= fibonacci_number; i++) {
        
        fibonacci_sum = num2 + num1;
        num1 = num2;
        num2 = fibonacci_sum;
    }

    return fibonacci_sum;
};

// Do not edit below this line
module.exports = fibonacci;
