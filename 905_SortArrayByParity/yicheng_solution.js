var sortArrayByParity = (A) =>{
    var even = [];
    var odd = []
    A.forEach(item => {
        if (item % 2 == 0){
            even.push(item);
        }
        else{
            odd.unshift(item);
        }
    });

    return even.concat(odd);
};


var input1 = [3,1,2,4];
console.log(sortArrayByParity(input1));
