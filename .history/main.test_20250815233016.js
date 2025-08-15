const solution = require('./main');

test('Basic case with all days present', () => {
    const input = {
        '2020-01-01': 4,
        '2020-01-02': 4,
        '2020-01-03': 6,
        '2020-01-04': 8,
        '2020-01-05': 2,
        '2020-01-06': -6,
        '2020-01-07': 2,
        '2020-01-08': -2,
    };

    expect(solution(input)).toEqual({
        'Sun': 2,
        'Mon': -6,
        'Tue': 2,
        'Wed': 4,
        'Thu': 4,
        'Fri': 6,
        'Sat': 8
    });
});

test('Missing days should get average of neighbors', () => {
    const input = {
        '2023-08-14': 5, // Mon
        '2023-08-15': 3, // Tue
        '2023-08-17': 8  // Thu
    };

    const result = solution(input);
    console.log(result); // Debugging

    expect(result['Wed']).toBe(Math.floor((3 + 8) / 2));
});
