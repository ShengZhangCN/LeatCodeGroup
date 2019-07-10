const nextGreaterElement = require("./yicheng_solution.js");

test("test solution", () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
});
