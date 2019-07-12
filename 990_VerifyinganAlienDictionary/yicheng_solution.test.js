const isAlienSorted = require("./yicheng_solution.js");

test("test solution", () => {
    expect(
        isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
    ).toEqual(true);
    expect(
        isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
    ).toEqual(false);
    expect(
        isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")
    ).toEqual(false);
});
