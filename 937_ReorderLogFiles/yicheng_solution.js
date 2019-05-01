var reorderLogFiles = function(logs) {
    var digitLog = [];
    var letterLog = [];

    logs.forEach(log => {
        if (isDigitLog(log)) {
            digitLog.push(log);
        } else {
            letterLog.push(log);
        }
    });

    console.log(digitLog);
    console.log(letterLog);


    var sortable = [];

    letterLog.forEach(log => {
        var identifier = log.substring(0, log.indexOf(" "));
        var rest = log.substring(log.indexOf(" "));
        sortable.push([identifier, rest]);
    });

    console.log(sortable);

    sortable.sort((a, b) => {
        return a[1].localeCompare(b[1]);
    });

    var sortedLetterLog = [];
    sortable.forEach(item => {
        var log = item[0] + "" + item[1];
        sortedLetterLog.push(log);
    });

    return sortedLetterLog.concat(digitLog);
};

var isDigitLog = (log) => {
    var logArray = log.split(" ");

    return !isNaN(logArray[1]);
};

var input1 = [
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo"
];

console.log(reorderLogFiles(input1));
// console.log(isDigitLog("g1 act ca"));
// console.log(isNaN("a1"));
// console.log(["act car", "off key dog", "act zoo"].sort());
