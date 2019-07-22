const findShortestSubArray = require("./yicheng_solution.js");

test("test solution", () => {
  expect(findShortestSubArray([1, 2, 2, 3, 1])).toEqual(2);
  expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toEqual(6);
});
