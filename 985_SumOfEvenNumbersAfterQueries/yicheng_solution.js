var sumEvenAfterQueries = (A, queries) =>{
    var result = [];

    queries.forEach(query => {
        A[query[1]] = A[query[1]] + query[0];
        var sum = sumEven(A);
        result.push(sum);
    });

    return result;
};

var sumEven = (array) => {
    var sum = 0;

    array.forEach(item => {
        if (item % 2 == 0){
            sum += item;
        }
    })

    return sum;
}



var A = [1,2,3,4];
var queries = [[1,0],[-3,1],[-4,0],[2,3]]

console.log(sumEvenAfterQueries(A, queries));
