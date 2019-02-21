var fib = (N) =>{
    if (N == 0){
        return 0;
    }

    if (N == 1){
        return 1;
    }

    return fib(N - 1) + fib(N - 2);
};

var input1 = 2;
var input2 = 3;
var input3 = 4;
console.log(fib(input1));
console.log(fib(input2));
console.log(fib(input3));
