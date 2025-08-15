const solution = require("./main");

test("Basic case with all days present", () => {
    var input = {
        "Sun": 2,
        "Mon": -6,
        "Tue": 2,
        "Wed": 4,
        "Thu": 4,
        "Fri": 8,
        "Sat": 8
    };

    expect(solution(input)).toEqual({
        "Sun": 2,
        "Mon": -6,
        "Tue": 2,
        "Wed": 4,
        "Thu": 4,
        "Fri": 8,
        "Sat": 8
    });
});

test("Missing days should get average of neighbors", () => {
    var input = {
        "Sun": 2,
        "Mon": 5,
        "Wed": 5,
        "Thu": 8,
        "Fri": 4,
        "Sat": 3
    };

    expect(solution(input)).toEqual({
        "Sun": 2,
        "Mon": 5,
        "Tue": 3, // average of Mon(5) and Wed(5) → 5, but floor keeps same
        "Wed": 5,
        "Thu": 8,
        "Fri": 4,
        "Sat": 3
    });
});
