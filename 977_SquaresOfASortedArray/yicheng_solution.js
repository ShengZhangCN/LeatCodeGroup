var sortedSquares = (A) => {

    A.sort((a, b)=>{
        return Math.pow(a, 2) - Math.pow(b, 2);
    })

    ASquare = A.map(item => {
        return Math.pow(item, 2);
    });

    return ASquare;
};

var a1 = [-4,-1,0,3,10];
var a2 = [-7,-3,2,3,11];

console.log(sortedSquares(a1));
console.log(sortedSquares(a2));
