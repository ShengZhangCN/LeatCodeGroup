const twoCitySchedCost = require("./yicheng_solution.js");

test("test solution", () => {
  expect(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])).toEqual(
    110
  );
});
