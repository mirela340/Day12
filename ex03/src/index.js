// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (startN > endN)
        return "The starting number will always be less than or equal to the ending number";

    if (startN === endN)
        return [endN];
    else {
        var countArray = rangeOfNumbers(startN + 1, endN);
        countArray.unshift(startN);
        return countArray;
    }
}

// Only change code above this line

console.log(rangeOfNumbers(7, 5)); // Change this line
module.exports = rangeOfNumbers;