const divisorGame = require("./yicheng_solution.js");

test("test solution", () => {
    expect(divisorGame(1)).toBe(false);
    expect(divisorGame(2)).toBe(true);
    expect(divisorGame(3)).toBe(false);
    expect(divisorGame(4)).toBe(true);
    expect(divisorGame(5)).toBe(false);
    expect(divisorGame(6)).toBe(true);
    expect(divisorGame(7)).toBe(false);

});
