var detectCapitalUse = require("./yicheng_solution.js");

test("test solution", () => {
    expect(detectCapitalUse("USA")).toEqual(true);
    expect(detectCapitalUse("FlaG")).toEqual(false);

});
