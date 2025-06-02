const palindromes = function (str) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the string with its reverse
    return cleaned === cleaned.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
