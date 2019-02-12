var flipAndInvertImage = (A) =>{
    return invert(flipHorizontal(A));
};

var flipHorizontal = (A) =>{
    return A.map(row =>{
        return flipArray(row);
    });
};

var flipArray = (A) =>{
    var AFlip = [];

    A.forEach(item => {
        AFlip.unshift(item);
    });

    return AFlip;
}

var invert = (A) =>{
    return A.map(row => {
        return row.map(item => {
            return item ^ 1;
        });
    });
};


var input1 = [[1,1,0],[1,0,1],[0,0,0]];
var input2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

// console.log(100 ^ 1);
// console.log(0 ^ 1);
console.log(flipAndInvertImage(input1));
console.log(flipAndInvertImage(input2));
