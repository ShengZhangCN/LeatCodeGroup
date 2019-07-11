var fairCandySwap = function(A, B) {
    var sum = 0;

    var sumA = 0;
    A.forEach(item => {
        sum += item;
        sumA += item;
    });

    var sumB = 0;
    B.forEach(item => {
        sum += item;
        sumB += item;
    });

    var average = sum / 2;
    var diffA = sumA - average;
    var diffB = sumB - average;

    var result = [];
    if (diffA < 0) {
        for (var i = 0; i < A.length; i++) {
            for (var j = 0; j < B.length; j++) {
                if (A[i] - B[j] == diffA) {
                    result.push(A[i], B[j]);
                    return result;
                }
            }
        }
    } else {
        for (var i = 0; i < B.length; i++) {
            for (var j = 0; j < A.length; j++) {
                if (A[j] - B[i] == diffA) {
                    result.push(A[j], B[i]);
                    return result;
                }
            }
        }
    }

    // console.log(result);
    return result;
};

module.exports = fairCandySwap;
