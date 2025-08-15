function solution(data) {
    const weekdayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const sums = {};
    const counts = {};

    // Initialize sums and counts
    weekdayMap.forEach(day => {
        sums[day] = 0;
        counts[day] = 0;
    });

    // Sum values by weekday
    for (const [date, value] of Object.entries(data)) {
        const weekday = weekdayMap[new Date(date).getDay()];
        sums[weekday] += value;
        counts[weekday] += 1;
    }

    // Replace 0 counts with averages of neighbors
    const days = weekdayMap.length;
    for (let i = 0; i < days; i++) {
        if (counts[weekdayMap[i]] === 0) {
            let prev = (i - 1 + days) % days;
            let next = (i + 1) % days;
            sums[weekdayMap[i]] = Math.floor((sums[weekdayMap[prev]] + sums[weekdayMap[next]]) / 2);
        }
    }

    return sums;
}

module.exports = solution;
