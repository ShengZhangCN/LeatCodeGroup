const findMaxConsecutiveOnes = require("./yicheng_solution.js");

test("test solution", () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
});
