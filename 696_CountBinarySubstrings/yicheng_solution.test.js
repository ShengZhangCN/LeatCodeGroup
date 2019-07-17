const countBinarySubstrings = require("./yicheng_solution.js");

test("test solution", () => {
    expect(countBinarySubstrings("00110011")).toEqual(6);
    expect(countBinarySubstrings("10101")).toEqual(4);

});
