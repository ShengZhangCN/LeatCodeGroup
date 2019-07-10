var toGoatLatin = function(S) {
    var sentence = "";
    S.split(" ").forEach((word, index) =>{
        sentence += convert(word, index + 1) + " ";
    });

    return sentence.trim();
};


var convert = (word, index) =>{
    var newWord = "";
    var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if (vowel.includes(word.charAt(0))){
        newWord = word + "ma";
    }
    else{
        newWord = word.substring(1) + word.charAt(0) + "ma";
    }

    for (var i = 0; i < index; i++){
        newWord+= "a";
    }
    return newWord;

};


module.exports = toGoatLatin;
