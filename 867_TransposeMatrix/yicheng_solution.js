var transpose = function(A) {
    var ATranspose = [];

    for (var i = 0; i < A[0].length; i++){
        var row = [];
        for (var j = 0; j < A.length; j++){
            row.push(A[j][i]);
        }
        ATranspose.push(row);

    }

    return ATranspose;
};

var input1 = [[1,2,3],[4,5,6],[7,8,9]];
var input2 = [[1,2,3],[4,5,6]];

console.log(transpose(input1));
console.log(transpose(input2));
