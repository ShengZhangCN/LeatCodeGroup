const largestTriangleArea = require("./yicheng_solution.js");

test("test solution", () => {
    expect(
        largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]])
    ).toEqual(2);
});
