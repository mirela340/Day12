// Only change code below thi sline
function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

// Only change code above this line
console.log(myCounter(5));
module.exports = myCounter;