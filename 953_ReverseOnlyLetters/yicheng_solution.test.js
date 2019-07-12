const reverseOnlyLetters = require("./yicheng_solution.js");

test("test solution", () => {
    expect(reverseOnlyLetters("ab-cd")).toEqual("dc-ba");
    expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toEqual("j-Ih-gfE-dCba");
    expect(reverseOnlyLetters("Test1ng-Leet=code-Q!")).toEqual(
        "Qedo1ct-eeLg=ntse-T!"
    );
});
