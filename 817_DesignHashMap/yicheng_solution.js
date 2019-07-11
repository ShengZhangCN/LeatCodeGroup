/**
 * Initialize your data structure here.
 */

class MyHashMap {
    constructor() {
        this.array = [];
        for (var i = 0; i < 1000; i++) {
            this.array.push([]);
        }
    }

    put(key, value) {
        var index = this.hash(key) % 1000;
        if (this.get(key) == -1){
            this.array[index].push([key, value]);
        }
        else{
            this.array[index].forEach(pair =>{
                if (pair[0] == key){
                    pair[1] = value;
                    return;
                }
            });
        }

    }
    get(key) {
        var index = this.hash(key) % 1000;
        var keyValue = this.array[index].filter(pair => {
            return pair[0] == key;
        });

        if (keyValue.length == 0){
            return -1;
        }
        return keyValue[0][1];
    }

    remove(key) {
        var index = this.hash(key) % 1000;
        this.array[index] = this.array[index].filter(pair => {
            return pair[0] != key;

        });
    }

    hash(key) {
        return key;
    }
}

module.exports = MyHashMap;
