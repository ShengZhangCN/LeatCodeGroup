var largestTriangleArea = function(points) {
    var largest = 0;
    for (var i = 0; i < points.length; i++){
        for (var j = i; j < points.length; j++){
            for (var k = j ; k < points.length; k++){
                largest = Math.max(largest, area(points[i], points[j], points[k]));
            }
        }
    }

    return largest;
};

var area = (a, b, c) => {
    return (
        0.5 *
        Math.abs(
            a[0] * b[1] +
                b[0] * c[1] +
                c[0] * a[1] -
                b[0] * a[1] -
                c[0] * b[1] -
                a[0] * c[1]
        )
    );
};

module.exports = largestTriangleArea;
