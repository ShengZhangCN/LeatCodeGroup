var minDeletionSize = (A) =>{
    var count = 0;
    for (var i = 0; i < A[0].length; i++){
        var string = "";
        for (var j = 0; j < A.length; j++){
            string += A[j].charAt(i);
        }

        if (!isIncreasing(string)){
            count++;
        }

    }

    return count;
};

var isIncreasing = (A) =>{
    for (var i = 0; i < A.length - 1; i++){
        if (A.charCodeAt(i + 1) - A.charCodeAt(i) < 0){
            return false;
        }
    }
    return true;
}

var input1 =  ["cba","daf","ghi"];
var input2 = ["a","b"];
var input3 = ["zyx","wvu","tsr"];

console.log(minDeletionSize(input1));
console.log(minDeletionSize(input2));
console.log(minDeletionSize(input3));
// console.log(isIncreasing("abca"));
