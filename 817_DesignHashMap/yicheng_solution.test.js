var MyHashMap = require("./yicheng_solution.js");

test("test solution", () => {
    var hashMap = new MyHashMap();
    hashMap.put(1, 1);
    hashMap.put(2, 2);
    expect(hashMap.get(1)).toEqual(1); // returns 1
    expect(hashMap.get(3)).toEqual(-1); // returns -1 (not found)
    hashMap.put(2, 1); // update the existing value
    expect(hashMap.get(2)).toEqual(1); // returns 1
    hashMap.remove(2); // remove the mapping for 2
    expect(hashMap.get(2)).toEqual(-1);
});
