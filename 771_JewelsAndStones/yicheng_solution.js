var numJewelsInStones = function(J, S) {
    var count = 0;
    for (var i = 0; i < J.length; i++) {
        var jewel = J.charAt(i);

        for (var j = 0; j < S.length; j++) {
            if (S.charAt(j) == jewel) {
                count++;
            }
        }
    }
    return count;
};

J = "aA";
S = "aAAbbbb";
console.log(numJewelsInStones(J, S));

J = "z";
S = "ZZ";
console.log(numJewelsInStones(J, S));
