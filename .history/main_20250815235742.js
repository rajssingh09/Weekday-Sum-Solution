function solution(D) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const result = {};

    // Step 1: Initialize all days with null
    for (let i = 0; i < days.length; i++) {
        result[days[i]] = null;
    }

    // Step 2: Fill in sums for available days
    for (let date in D) {
        const dayIndex = new Date(date).getDay(); // 0=Sun, 1=Mon, ...
        const dayName = days[(dayIndex + 6) % 7]; // Adjust to start from Mon
        if (result[dayName] === null) {
            result[dayName] = 0;
        }
        result[dayName] += D[date];
    }

    // Step 3: Fill missing days with mean of prev and next day
    for (let i = 0; i < days.length; i++) {
        if (result[days[i]] === null) {
            let prevIndex = (i - 1 + days.length) % days.length;
            let nextIndex = (i + 1) % days.length;

            // Find previous non-null
            while (result[days[prevIndex]] === null) {
                prevIndex = (prevIndex - 1 + days.length) % days.length;
            }

            // Find next non-null
            while (result[days[nextIndex]] === null) {
                nextIndex = (nextIndex + 1) % days.length;
            }

            // Mean of prev and next
            result[days[i]] = Math.floor((result[days[prevIndex]] + result[days[nextIndex]]) / 2);
        }
    }

    return result;
}

exports.de