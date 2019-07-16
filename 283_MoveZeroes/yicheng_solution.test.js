const moveZeroes = require("./yicheng_solution.js");

test("test solution", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});
