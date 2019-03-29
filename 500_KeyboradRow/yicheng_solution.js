const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

var findWords = function(words) {
    var filteredWords = words.filter(word => {
        var index = getRowIndex(word.charAt(0).toLowerCase());

        for (var i = 1; i < word.length; i++){
            var curIndex = getRowIndex(word.charAt(i).toLowerCase());
            // console.log("curIndex " + curIndex);
            if (curIndex != index){
                return false;
            }
            // index = curIndex;
        }

        return true;
    })

    return filteredWords;
};


var getRowIndex = (c) => {
    var index = 0;
    row1.forEach(item =>{
        if (item.toLowerCase().charAt(0) == c){
            index = 0;
            return;
        }
    });

    row2.forEach(item =>{

        if (item.toLowerCase().charAt(0) == c){
            index = 1;
            return;
        }
    });

    row3.forEach(item =>{
        if (item.toLowerCase().charAt(0) == c){
            index = 2;
            return;
        }
    });

    return index;
}

var input1 = ["Hello", "Alaska", "Dad", "Peace"];

console.log(findWords(input1));
console.log(getRowIndex("A"));
