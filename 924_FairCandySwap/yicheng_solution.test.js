var fairCandySwap = require("./yicheng_solution.js");

test("test solution", () => {
    expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);

    expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);

    expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);

    expect(fairCandySwap([1, 2, 5], [2, 4])).toEqual([5, 4]);

});
