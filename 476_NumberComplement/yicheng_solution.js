var findComplement = function(num) {
    var highOne = 0;
    var numDum = num;
    while (numDum != 0){
        numDum = numDum >> 1;
        highOne ++;
    }
    var mask = ~0;

    while(highOne != 0){
        mask = mask << 1;
        highOne --;
    }
    mask = ~mask;

    return mask & ~num;
};

var input1 = 5;
var input2 = 1;

console.log(findComplement(input1));
console.log(findComplement(input2));
