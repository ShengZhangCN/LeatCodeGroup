const gcdOfStrings = require("./yicheng_solution.js");

test("test solution", () => {
  expect(gcdOfStrings("ABCABC", "ABC")).toEqual("ABC");
  expect(gcdOfStrings("ABABAB", "ABAB")).toEqual("AB");
  expect(gcdOfStrings("LEET", "CODE")).toEqual("");
});
