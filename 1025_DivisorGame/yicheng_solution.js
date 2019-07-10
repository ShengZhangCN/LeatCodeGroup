var divisorGame = function(N) {
    var array = [false];
    for (var i = 1; i <= N; i++){
        array.push(false);
    }

    if (N == 1){
        return false;
    }

    array[2] = true;

    for (var i = 3; i <= N; i++){

        for (var j = 1; j <= i; j++){

            if (array[j] && array[i - j]){
                array[i] = true;
                break;
            }
        }

    }
    return array[array.length - 1];
    // if (N == 2) {
    //     return true;
    // }
    //
    // for (var i = 1; i < Math.floor(N / 2); i++) {
    //     if (N % i == 0 && !divisorGame(N - i)) {
    //         return true;
    //     }
    // }
    //
    // return false;
};

module.exports = divisorGame;
