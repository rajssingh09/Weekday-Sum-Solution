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
        "Tue": 5, // Correct average of Mon(5) and Wed(5)
        "Wed": 5,
        "Thu": 8,
        "Fri": 4,
        "Sat": 3
    });
});
