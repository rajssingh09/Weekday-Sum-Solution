function solution(D) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const result = {};

    for (let i = 0; i < days.length; i++) {
        result[days[i]] = null;
    }

    for (let date in D) {
        const dayIndex = new Date(date).getDay();
        const dayName = days[(dayIndex + 6) % 7];
        if (result[dayName] === null) {
            result[dayName] = 0;
        }
        result[dayName] += D[date];
    }

    for (let i = 0; i < days.length; i++) {
        if (result[days[i]] === null) {
            let prevIndex = (i - 1 + days.length) % days.length;
            let nextIndex = (i + 1) % days.length;

            while (result[days[prevIndex]] === null) {
                prevIndex = (prevIndex - 1 + days.length) % days.length;
            }
            while (result[days[nextIndex]] === null) {
                nextIndex = (nextIndex + 1) % days.length;
            }
            result[days[i]] = Math.floor(
                (result[days[prevIndex]] + result[days[nextIndex]]) / 2
            );
        }
    }

    return result;
}

module.exports = solution; // ✅ Export the function
