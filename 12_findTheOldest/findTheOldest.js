const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    let oldest = 0;
    let k = 0;

    for (let i = k; i < array.length; i++) {
        if (array[i].yearOfDeath === undefined) {
            array[i].yearOfDeath = currentYear;
          }

        let age = array[i].yearOfDeath - array[i].yearOfBirth;
        if (age > oldest) {
            oldest = age;
            k = i;
        }
    }

    return array[k]
};

// Do not edit below this line
module.exports = findTheOldest;
