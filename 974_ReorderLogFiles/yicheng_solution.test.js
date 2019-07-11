var reorderLogFiles = require("./yicheng_solution.js");

test("test solution", () => {
    expect(
        reorderLogFiles([
            "a1 9 2 3 1",
            "g1 act car",
            "zo4 4 7",
            "ab1 off key dog",
            "a8 act zoo",
        ])
    ).toEqual([
        "g1 act car",
        "a8 act zoo",
        "ab1 off key dog",
        "a1 9 2 3 1",
        "zo4 4 7",
    ]);
});
