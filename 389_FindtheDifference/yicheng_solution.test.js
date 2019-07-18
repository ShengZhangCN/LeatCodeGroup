const findTheDifference = require("./yicheng_solution.js");

test("test solution", () => {
  expect(findTheDifference("abcd", "abcde")).toEqual("e");
  expect(findTheDifference("abed", "abced")).toEqual("c");

});
