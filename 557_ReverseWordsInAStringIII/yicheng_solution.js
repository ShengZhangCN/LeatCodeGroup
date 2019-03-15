var reverseWords = function(s) {
    var words = s.trim().split(" ");

    var reverseWords = words.map(word =>{
        return word.split("").reverse().join("");
    });

    return reverseWords.join(" ");

};

var input1 = "Let's take LeetCode contest";
console.log(reverseWords(input1));
