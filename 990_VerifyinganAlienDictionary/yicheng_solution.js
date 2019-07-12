var isAlienSorted = function(words, order) {
    for (var i = 0; i < words.length - 1; i++) {
        if (!isBefore(words[i], words[i + 1], order)) {
            return false;
        }
    }
    return true;
};

var isBefore = (a, b, order) => {
    var aArray = a.split("");
    var bArray = b.split("");

    while (aArray.length > 0 && bArray.length > 0) {
        if (order.indexOf(aArray[0]) > order.indexOf(bArray[0])) {
            return false;
        } else if (order.indexOf(aArray[0]) < order.indexOf(bArray[0])) {
            return true;
        } else {
            aArray.shift();
            bArray.shift();
        }
    }

    if (aArray.length != 0) {
        return false;
    }

    return true;
};

module.exports = isAlienSorted;
