var sortArrayByParityII = (A) =>{
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

    var result = [];
    for (var i = 0; i < even.length; i++){
        result.push(even[i]);
        result.push(odd[i]);
    }
    return result;
};


var input1 = [4,2,5,7];
console.log(sortArrayByParityII(input1));
