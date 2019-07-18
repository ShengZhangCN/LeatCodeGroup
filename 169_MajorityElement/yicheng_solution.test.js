const majorityElement = require("./yicheng_solution.js");

test("test solution", () => {
  expect(majorityElement([3,2,3])).toEqual(3);
  expect(majorityElement([2,2,1,1,1,2,2])).toEqual(2);

});
