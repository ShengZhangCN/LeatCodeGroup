var recursive = {
    diStringMatch(S){
        var elements = Array.apply(null, {length: S.length + 1}).map((value, index) => {
            return index;
        });
        // console.log(elements);
        return this.placeElement(S, elements);

    },

    placeElement(S, elements){

        if (S.length == 0){
            return elements;
        }

        if (S.charAt(0) == 'I'){
            var a = this.placeElement(S.substring(1, S.length), elements.splice(1, elements.length - 1));
            a.unshift(elements[0]);
            return a;
        }
        else{
            var a = this.placeElement(S.substring(1, S.length), elements.splice(0, elements.length - 1));
            a.unshift(elements[elements.length - 1]);
            return a;
        }

    }

};

var iterative = {
    diStringMatch(S){
        var array = [];
        var elements = Array.apply(null, {length: S.length + 1}).map((value, index) => {
            return index;
        });

        for (var i = 0; i < S.length; i++){
            var element;
            var index;
            if (S.charAt(i) == 'D'){
                index = elements.length - 1;
            }
            else{
                index = 0;
            }
            element = elements[index];
            elements.splice(index, 1);

            array.push(element);
        }

        array.push(elements[0]);

        return array;
    }
}

// console.log(recursive.diStringMatch("I"));
console.log(recursive.diStringMatch("III"));
console.log(recursive.diStringMatch("DDI"));

// var elements = Array.apply(null, {length: 10}).map((value, index) => {
//     return index;
// });
//
// console.log(elements);
