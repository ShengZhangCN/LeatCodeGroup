var Naive = {
    table: [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."],
    uniqueMorseRepresentations(words){
        var set = new Set();

        words.forEach(word => {
            set.add(this.encode(word));
        })

        return set.size;
    },
    encode(word){
        var encodedWord = "";
        for (var i = 0; i < word.length; i++){
            var c = word.charCodeAt(i);
            encodedWord += this.table[c - 97];
        }
        return encodedWord;
    }
}

// var uniqueMorseRepresentations = (words) => {
//
// };

var words = ["gin", "zen", "gig", "msg"];

console.log(Naive.uniqueMorseRepresentations(words));
