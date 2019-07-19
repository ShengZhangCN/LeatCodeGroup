var titleToNumber = require("./yicheng_solution.js");

test("test solution", () => {
  expect(titleToNumber("A")).toEqual(1);
  expect(titleToNumber("AB")).toEqual(28);
  expect(titleToNumber("ZY")).toEqual(701);
});
