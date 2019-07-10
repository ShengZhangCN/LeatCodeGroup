var hasAlternatingBits = function(n) {
    var highestBit = 0;
    var nn = n;
    while (nn != 0){
        nn = nn >>1;
        highestBit++;
    }

    // console.log(highestBit);

    var lastBit = getBit(n, 0);
    // console.log(lastBit);

    for (var i = 1; i < highestBit; i++){
        if (lastBit == getBit(n, i)){
            return false;
        }

        lastBit = getBit(n, i);
    }

    return true;
};

var getBit = (n, position)=>{
    var mask = 1 << position;

    return (n & mask) >>> position;
}

module.exports = hasAlternatingBits;
