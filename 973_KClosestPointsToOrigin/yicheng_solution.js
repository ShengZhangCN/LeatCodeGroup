var kClosest = (points, K) =>{
    var closetPoints = [];
    points.sort((a, b)=>{
        return distanceToOrigin(a) - distanceToOrigin(b);
    })

    for (var i = 0 ; i < K; i++){
        closetPoints.push(points[i]);
    }
    return closetPoints;
};

var distanceToOrigin = (point) =>{
    return Math.pow(point[0], 2) + Math.pow(point[1], 2);
}


var input1 = { "points" : [[1,3],[-2,2]], "K" : 1};
var input2 = {"points":  [[3,3],[5,-1],[-2,4]], "K" : 2};

console.log(kClosest(input1["points"], input1["K"]));
console.log(kClosest(input2["points"], input2["K"]));
