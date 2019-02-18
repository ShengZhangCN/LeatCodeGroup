var hammingDistance = (x, y) =>{
    var or = x ^ y;

    var count = 0;

    while (or != 0){
        if (or & 1 == 1){
            count ++;
        }
        or = or >> 1;
    }

    return count;
};

console.log(hammingDistance(1, 4));
// console.log(1 | 4);
