var selfDividingNumbers = (left, right) => {
    var result=[];
    for (var num = left; num <= right; num++){
        if (isDividingNumber(num)){
            result.push(num);
        }
    }
    return result;
};

var isDividingNumber = (num) =>{
    var origNum = num;
    while (num != 0){
        var digit = num % 10;
        // console.log(`digit ${digit}`);
        if (origNum % digit != 0){
            return false;
        }

        num = parseInt(num / 10);
        // console.log(`num ${num}`);
    }

    return true;
}

var left = 1, right = 22;
console.log(selfDividingNumbers(left , right));
// console.log(isDividingNumber(128))
