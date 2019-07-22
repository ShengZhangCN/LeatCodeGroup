var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length- 1;
    var result = [];
    while (left < right){
        if (numbers[left] + numbers[right] < target){
            left++;
        }
        else if (numbers[left] + numbers[right] > target){
            right --;
        }
        else{
            result.push(left + 1, right +1);
            break;
        }
    }
    return result;
};

module.exports = twoSum;
