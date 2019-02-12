var repeatedNTimes = (A) => {
    var map = {};

    var result;

    A.forEach(item =>{

        if (!(item in map)){
            map[item] = 1;
        }
        else{
            result = item;
        }
    });

    return result;
};



var a1 = [1,2,3,3];
var a2 = [2,1,2,5,3,2];
var a3 = [5,1,5,2,5,3,5,4];

console.log(repeatedNTimes(a1));
console.log(repeatedNTimes(a2));
console.log(repeatedNTimes(a3));
// var map = {};
// map[1] =1;
// console.log(2 in map);
