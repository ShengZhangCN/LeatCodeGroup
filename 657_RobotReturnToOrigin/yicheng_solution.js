var judgeCircle = (moves) => {
    var map = {
        "vertical": 0,
        "horizontal": 0,
    }
    moves.split("").forEach(step => {
        switch (step) {
            case "U":
                map["vertical"]++;
                break;
            case "D":
                map["vertical"]--
                break;
            case "L":
                map["horizontal"]++;
                break;
            case "R":
                map["horizontal"]--;
                break;
        }
    });

    return map["horizontal"] == 0 && map["vertical"] == 0;

};


var input1 = "UD";
var input2 = "LL";

console.log(judgeCircle(input1));
console.log(judgeCircle(input2));
