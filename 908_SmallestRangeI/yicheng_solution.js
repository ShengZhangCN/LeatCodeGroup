var smallestRangeI = function(A, K) {
    var max = Math.max(...A);

    var target = max - K;

    var B = [];

    A.forEach(item => {
        if (target - item <= K || item - target >= K){
            B.push(target);
        }
        else{
            if (target - item > K){
                B.push(item + K);
            }
            else{
                B.push(item - K);
            }

        }
    });


    var maxB = Math.max(...B);
    var minB = Math.min(...B);

    return maxB - minB;
};

var input1 = {
    A: [1],
    K: 0
};
var input2 = {
    A: [0, 10],
    K: 2
};
var input3 = {
    A: [1, 3, 6],
    K: 3
};

console.log(smallestRangeI(input1.A, input1.K));
console.log(smallestRangeI(input2.A, input2.K));
console.log(smallestRangeI(input3.A, input3.K));
