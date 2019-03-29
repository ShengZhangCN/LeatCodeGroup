var numSpecialEquivGroups = function(A) {
    var groups = {};
    for (var i = 0; i < A.length; i++) {
        var sortedA = sort(A[i]);
        if (groups[sortedA] == undefined){
            groups[sortedA] = [A[i]];
        }
        else{
            continue;
        }

        for (var j = i + 1; j < A.length; j++) {
            var sortedB = sort(A[j]);

            if (sortedA == sortedB) {
                if (groups[sortedA] != undefined) {
                    groups[sortedA].push(A[j]);
                }

            }
        }
    }

    return Object.keys(groups).length;
};

var sort = (a) =>{
    var aOdd = [];
    var aEven = [];

    for (var i = 0; i < a.length; i = i + 2) {
        aEven.push(a.charAt(i));
    }

    for (var i = 1; i < a.length; i = i + 2) {
        aOdd.push(a.charAt(i));
    }

    aEven.sort();
    aOdd.sort();

    var aSort = aEven.concat(aOdd);

    var sorted = "";

    aSort.forEach(item =>{
        sorted += item;
    })

    return sorted;

}

var input1 = ["a", "b", "c", "a", "c", "c"];
var input2 = ["aa", "bb", "ab", "ba"];
var input3 = ["abc", "acb", "bac", "bca", "cab", "cba"];

console.log(numSpecialEquivGroups(input1));
console.log(numSpecialEquivGroups(input2));
console.log(numSpecialEquivGroups(input3));

console.log(sort("acb"))
