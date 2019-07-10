const largestPerimeter = require("./yicheng_solution.js");

test("test solution", () => {
    expect(largestPerimeter([2,1,2])).toEqual(5);
    expect(largestPerimeter([1,2,1])).toEqual(0);
    expect(largestPerimeter([3,2,3,4])).toEqual(10);
    expect(largestPerimeter([3,6,2,3])).toEqual(8);
});
