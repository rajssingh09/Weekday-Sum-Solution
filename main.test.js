const solution = require("./main"); // or './solution' if your file is named solution.js

test("Test 1", () => {
    const test1 = {
        "2020-01-01": 4, "2020-01-02": 4, "2020-01-03": 6,
        "2020-01-04": 8, "2020-01-05": 2, "2020-01-06": -6,
        "2020-01-07": 2, "2020-01-08": -2
    };
    console.log("Test 1:", solution(test1));
});

test("Test 2", () => {
    const test2 = {
        "2020-01-01": 6, "2020-01-04": 12, "2020-01-05": 14,
        "2020-01-06": 2, "2020-01-07": 4
    };
    console.log("Test 2:", solution(test2));
});
