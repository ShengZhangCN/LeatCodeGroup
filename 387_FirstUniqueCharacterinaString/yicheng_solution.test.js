const firstUniqChar = require("./yicheng_solution.js");

test("test solution", () => {
  expect(firstUniqChar("leetcode")).toEqual(0);
  expect(firstUniqChar("loveleetcode")).toEqual(2);
  expect(firstUniqChar("")).toEqual(-1);
  expect(firstUniqChar("cc")).toEqual(-1);

});
