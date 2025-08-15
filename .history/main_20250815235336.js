// Function to calculate weekday sums
function sumWeekdays(data) {
    const weekdaySums = {};
    for (let i = 0; i < data.length; i++) {
        const { day, value } = data[i];
        if (!weekdaySums[day]) {
            weekdaySums[day] = 0;
        }
        weekdaySums[day] += value;
    }
    return weekdaySums;
}

// Example usage
const input = [
    { day: "Monday", value: 10 },
    { day: "Tuesday", value: 20 },
    { day: "Monday", value: 5 },
    { day: "Wednesday", value: 15 },
    { day: "Tuesday", value: 7 }
];

console.log(sumWeekdays(input));
