function solution(input) {
    // Order of days for reference
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Step 1: Copy input into a new object so we don’t change original
    var result = {};
    for (var i = 0; i < days.length; i++) {
        var dayName = days[i];
        result[dayName] = input[dayName];
    }

    // Step 2: Fill missing days with average of neighbors
    for (var i = 0; i < days.length; i++) {
        if (result[days[i]] === undefined) {
            // Find left neighbor
            var leftIndex = (i - 1 + days.length) % days.length;
            var rightIndex = (i + 1) % days.length;

            var leftValue = result[days[leftIndex]];
            var rightValue = result[days[rightIndex]];

            // Average of neighbors
            var avg = Math.floor((leftValue + rightValue) / 2);
            result[days[i]] = avg;
        }
    }

    return result;
}

module.exports = solution;
