const shortestCompletingWord = require("./yicheng_solution.js");

test("test solution", () => {
  expect(
    shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
  ).toEqual("steps");
  expect(
    shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
  ).toEqual("pest");
});
