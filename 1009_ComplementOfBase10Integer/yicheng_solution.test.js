const bitwiseComplement = require("./yicheng_solution.js");

test("test solution", () => {
    expect(bitwiseComplement(5)).toEqual(2);
    expect(bitwiseComplement(7)).toEqual(0);
    expect(bitwiseComplement(10)).toEqual(5);
});
