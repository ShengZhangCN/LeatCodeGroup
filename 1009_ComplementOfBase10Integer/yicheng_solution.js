var bitwiseComplement = function(N) {
    var highestBit = 0;
    var n = N;
    while (n != 0) {
        n = n >> 1;
        highestBit++;
    }
    console.log(highestBit);
    var result = N;

    for (var i = 0; i < highestBit; i++){
        result = flipBit(result, i);
    }

    if (highestBit == 0){
        result = flipBit(result, 0);
    }
    return result;
};

const flipBit = (num, position) => {
  let mask = 1 << position
  // If the current state of the bit is 0, XOR will return 1
  // If the bit is 1, XOR will set it to 0
  return num ^ mask;
}

module.exports = bitwiseComplement;
