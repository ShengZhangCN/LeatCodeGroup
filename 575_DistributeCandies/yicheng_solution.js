var distributeCandies = function(candies) {
    var kinds = candies.filter((item, index) =>{
        return index == candies.indexOf(item);
    });


    for (var i = kinds.length; i >= 0; i --){
        if (candies.length - i == candies.length / 2){
            return i;
        }
        else if (i < candies.length / 2){
            return i;
        }
    }

    return 0;


    // console.log(kinds);
};




var input1 = [1, 1, 2, 2, 3, 3];
var input2 = [1, 1, 2, 3];
var input3 = [1,1,1,1,2,2,2,3,3,3];



console.log(distributeCandies(input3));
console.log(distributeCandies(input2));
