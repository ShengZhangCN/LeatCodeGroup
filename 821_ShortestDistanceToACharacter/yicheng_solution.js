var shortestToChar = function(S, C) {
    var indexList = [];
    for (var i = 0 ; i< S.length; i++){
        // console.log(S.charAt(i));
        if (S.charAt(i) == C){
            indexList.push(i);
        }
    }

    var result = [];
    for (var i = 0; i < S.length; i++){
        var diff = indexList.map(index =>{
            return Math.abs(i - index);
        })
        result.push(Math.min(...diff));
        console.log(diff);
    }

    console.log(indexList);
    return result;
};

var input1 = {S:"loveleetcode", C: 'e'};
console.log(shortestToChar(input1.S, input1.C));
