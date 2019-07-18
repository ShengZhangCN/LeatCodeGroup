const findDisappearedNumbers = require("./yicheng_solution.js");

test("test solution", () => {
  expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
});
