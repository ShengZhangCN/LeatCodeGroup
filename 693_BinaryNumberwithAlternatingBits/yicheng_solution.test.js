const hasAlternatingBits = require("./yicheng_solution.js");

test("test solution", () => {
    expect(hasAlternatingBits(5)).toEqual(true);
    expect(hasAlternatingBits(7)).toEqual(false);
    expect(hasAlternatingBits(11)).toEqual(false);
    expect(hasAlternatingBits(10)).toEqual(true);

});
