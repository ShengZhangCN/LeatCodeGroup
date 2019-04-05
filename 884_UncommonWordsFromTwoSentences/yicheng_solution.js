var uncommonFromSentences = function(A, B) {
    var wordsA = A.split(" ");
    var wordsB = B.split(" ");

    var map = {};

    wordsA.forEach(word => {
        if (map[word] == undefined){
            map[word] = [1, 0];
        }
        else{
            map[word][0] ++;
        }
    });

    wordsB.forEach(word => {
        if (map[word] == undefined){
            map[word] = [0, 1];
        }
        else{
            map[word][1] ++;
        }
    });



    var result = Object.keys(map).filter(key => {
        if ((map[key][0] == 0 && map[key][1] == 1) || (map[key][0] == 1 && map[key][1] == 0)) {
            return true;
        }
    });

    return result;

};

var input1 = {A : "this apple is sweet", B : "this apple is sour"};
var input2 = {A : "apple apple", B : "banana"};

console.log(uncommonFromSentences(input1.A, input1.B));
console.log(uncommonFromSentences(input2.A, input2.B));
