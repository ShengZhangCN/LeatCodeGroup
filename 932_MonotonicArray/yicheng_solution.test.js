const isMonotonic = require("./yicheng_solution.js");

test("test solution", () => {
  expect(isMonotonic([1, 2, 2, 3])).toEqual(true);
  expect(isMonotonic([6, 5, 4, 4])).toEqual(true);
  expect(isMonotonic([1, 3, 2])).toEqual(false);
  expect(isMonotonic([1, 2, 4, 5])).toEqual(true);
  expect(isMonotonic([1, 1, 1])).toEqual(true);
});
