var largestPerimeter = function(A) {
    var sortedA = A.sort((a, b) => {
        return a - b;
    });

    var perimeter = 0;
    for (var i = 2; i < sortedA.length; i++){
        var triangle = [sortedA[i- 2], sortedA[i-1], sortedA[i]];
        if (isValid(triangle)){
            perimeter = Math.max(perimeter, sortedA[i- 2]+ sortedA[i-1]+ sortedA[i])
        }
    }

    return perimeter;

};

var isValid = (A) => {
    var sortedA = A.sort((a, b)=>{
        return a - b;
    });

    if (A[0] + A[1] <= A[2]){
        return false;
    }

    return true;
}

module.exports = largestPerimeter;
