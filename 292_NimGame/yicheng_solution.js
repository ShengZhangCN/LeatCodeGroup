var canWinNim = function(n) {
    var array = [];

    for (var i = 0; i < n + 1; i++){
        array[i] = false;
    }

    array[1] = true;
    array[2] = true;
    array[3] = true;

    if (n <= 3){
        return true;
    }

    for (var i = 4; i <= n; i++){
        for (var j = 1; j <= i;j++){
            if (array[j] && !array[i - j]){
                array[i] = true;
            }
        }
    }

    return array[n];
};

var canWinNim2 = (n) =>{
    return n % 4 != 0;
}
module.exports = canWinNim;
