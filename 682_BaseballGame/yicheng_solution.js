var calPoints = function(ops) {
    var points = [];

    ops.forEach(op =>{
        switch(op){
            case "C":{
                points.pop();
            }
            break;
            case "D":{
                points.push(points[points.length - 1] * 2);
            }
            break;
            case "+":{
                points.push(points[points.length - 1] + points[points.length - 2]);
            }
            break;
            default:{
                points.push(parseInt(op));
            }
        }

    });

    return points.reduce((accu, num)=>{
        return accu + num;
    });
};

var input1 = ["5","2","C","D","+"];
var input2 = ["5","-2","4","C","D","9","+","+"];

console.log(calPoints(input1));
console.log(calPoints(input2));
