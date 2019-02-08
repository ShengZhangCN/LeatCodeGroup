var toLowerCase = (str) =>{
    var lowerCaseStr = "";
    for (var i = 0; i < str.length; i++){
        var lowerCase = String.fromCharCode(str.charCodeAt(i));
        if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64) {
            lowerCase = String.fromCharCode(str.charCodeAt(i) + 32);
        }
        lowerCaseStr += lowerCase;
    }

    return lowerCaseStr;
};

var str1 = "Hello";
var str2 = "here";
var str3 = "LOVELY";
var str4 = "al&phaBET";

console.log(toLowerCase(str1));
console.log(toLowerCase(str2));
console.log(toLowerCase(str3));
console.log(toLowerCase(str4));
