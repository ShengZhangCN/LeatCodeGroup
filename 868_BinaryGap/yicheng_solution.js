var binaryGap = function(N) {
    // console.log(toBitArray(N));
    var array = toBitArray(N);
    var gap = 0;

    for (var i = 0; i < array.length; i++){
        if (array[i] == 0){
            continue;
        }
        var curGap = 0;
        for (var j = i + 1; j < array.length; j++){
            if (array[j] == 0 && j < array.length - 1){
                curGap ++;
            }
            else if (array[j] == 0 && j == array.length - 1){
                curGap = 0;
            }
            else{
                if (curGap == 0){
                    curGap = 1;
                }
                else{
                    curGap ++;
                }
                break;
            }
        }

        gap = curGap > gap ? curGap : gap;
    }

    return gap;
};

var toBitArray = (N) =>{
    var array = [];

    while (N != 0){
        array.unshift(N % 2);
        N = parseInt(N / 2);
    }

    return array;
}

var input1 = 22;
var input2 = 5;
var input3 = 6;
var input4 = 8;

console.log(binaryGap(input1));
console.log(binaryGap(input2));
console.log(binaryGap(input3));
console.log(binaryGap(input4));
