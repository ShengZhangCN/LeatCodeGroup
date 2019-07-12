var reverseOnlyLetters = function(S) {
    var sArray = S.split("");

    var result = new Array(S.length);

    var cCount = 0;

    sArray.forEach((c, index) => {
        if (!c.match(/[a-zA-Z]/)) {
            result[index] = c;
        }
    })

    sArray.forEach((c, index) => {
        if (c.match(/[a-zA-Z]/)) {
            for (var i = S.length - 1; i >= 0; i--) {
                if (!result[i]) {
                    result[i] = c;
                    break;
                }
            }
        }
        // console.log(result);
    });

    var str = "";
    result.forEach(c => {
        str += c;
    });
    return str;
};

module.exports = reverseOnlyLetters;
