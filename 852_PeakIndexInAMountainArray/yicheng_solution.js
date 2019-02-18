var peakIndexInMountainArray = (A) =>{
    for (var i = 0; i < A.length - 1; i++){
        if (A[i] > A[i + 1]){
            return i;
        }
    }
    return -1;
};

var input1 = [0,1,0];
var input2 = [0,2,1,0];
console.log(peakIndexInMountainArray(input1));
console.log(peakIndexInMountainArray(input2));
