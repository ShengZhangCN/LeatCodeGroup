const canThreePartsEqualSum = require("./yicheng_solution.js");

test("test solution", () => {
  expect(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toEqual(
    true
  );
  expect(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toEqual(
    false
  );
  expect(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toEqual(true);
});
