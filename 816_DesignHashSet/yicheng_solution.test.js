const MyHashSet = require("./yicheng_solution.js");

test("test solution", () => {
  var hashSet = new MyHashSet();
  hashSet.add(1);
  hashSet.add(2);
  expect(hashSet.contains(1)).toEqual(true); // returns true
  expect(hashSet.contains(3)).toEqual(false); // returns false (not found)
  hashSet.add(2);
  expect(hashSet.contains(2)).toEqual(true); // returns true
  hashSet.remove(2);
  expect(hashSet.contains(2)).toEqual(false); // returns false (already removed)
});
