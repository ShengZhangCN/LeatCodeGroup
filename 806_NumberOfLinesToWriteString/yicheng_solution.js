var numberOfLines = function(widths, S) {
    var lineCount = 0;
    var lineLimit = 100;

    for (var i = 0; i < S.length; i++){
        var width = widths[S.charCodeAt(i) - 'a'.charCodeAt(0)];
        lineLimit = lineLimit - width;
        if (lineLimit < 0){
            lineCount++;
            lineLimit = 100;
            i-- ;
        }
    }

    return [lineCount +1, 100 - lineLimit];
};

var input1 = {
    widths: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    S: "abcdefghijklmnopqrstuvwxyz"
};

console.log(numberOfLines(input1.widths, input1.S));

var input2 = {
    widths: [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    S: "bbbcccdddaaa"
};
console.log(numberOfLines(input2.widths, input2.S));
