const surfaceArea = require("./yicheng_solution.js");

test("test solution", () => {
    expect(surfaceArea([[2]])).toEqual(10);
    expect(surfaceArea([[1, 2], [3, 4]])).toEqual(34);
    expect(surfaceArea([[1, 0], [0, 2]])).toEqual(16);
    expect(surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toEqual(32);
    expect(surfaceArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]])).toEqual(46);
    expect(surfaceArea([[4, 0, 2], [1, 2, 3], [2, 3, 5]])).toEqual(70);
    expect(
        surfaceArea([[0, 3, 4, 3], [4, 5, 0, 5], [0, 4, 2, 4], [4, 0, 0, 2]])
    ).toEqual(122);
    expect(
        surfaceArea([[5, 4, 1, 0], [1, 0, 2, 0], [3, 1, 4, 2], [3, 1, 2, 5]])
    ).toEqual(110);
});
