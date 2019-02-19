var arrayPairSum = (nums) => {
    nums.sort((a, b) => {
        return a - b;
    });
    var sum = 0;
    for (var i = 0; i < nums.length - 1; i = i + 2) {
        sum += nums[i]
    }

    return sum;
};

var input1 = [1, 4, 3, 2];
var input2 = [6214, -2290, 2833, -7908];
var input3 = [11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855];

console.log(arrayPairSum(input1));
console.log(arrayPairSum(input2));
console.log(arrayPairSum(input3));
