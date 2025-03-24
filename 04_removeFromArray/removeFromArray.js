const removeFromArray = function(array, ...elementsToRemove) {
    // find the element from an array and remove it
    // ensure it is of the same type
    // ensure function can accept several optional elements
    let arr = array;
    
    // Finding the index of the element to remove
    for (index in elementsToRemove) {
        for (elementIndex in arr) {
            let element = arr[elementIndex];
            if ((element == elementsToRemove[index]) && typeof(element) == typeof(elementsToRemove[index])) {
                // remove all elements from array
                arr = arr.filter(item => item !== element)
            };
        };
    };
    
    return arr
};
let result = removeFromArray([3, 2, 3, 3, 4], 4, 3, 5)

// Do not edit below this line
module.exports = removeFromArray;
