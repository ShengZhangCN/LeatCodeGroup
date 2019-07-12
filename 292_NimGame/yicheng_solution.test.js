const canWinNim = require("./yicheng_solution.js");

test("test solution", () => {
    expect(canWinNim(1)).toEqual(true);
    expect(canWinNim(2)).toEqual(true);
    expect(canWinNim(3)).toEqual(true);
    expect(canWinNim(4)).toEqual(false);
    expect(canWinNim(5)).toEqual(true);
    expect(canWinNim(6)).toEqual(true);
    expect(canWinNim(7)).toEqual(true);
    expect(canWinNim(8)).toEqual(false);

});
