var reverseString = function(s) {
    var left =0;
    var right = s.length - 1;

    while (left < right){
        var sLeft = s[left];
        s[left] = s[right];
        s[right] = sLeft;
        left ++;
        right --;
    }

    return s;

};

var input1 = ["h","e","l","l","o"];
var input2 = ["H","a","n","n","a","h"];

console.log(reverseString(input1));
console.log(reverseString(input2));
