function solution(D) {
    // An array to help us keep the order of the days correct.
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Let's create a dictionary to store our results.
    // We'll start with all values as 'null' to know which ones are missing.
    const weeklyTotals = {
        'Mon': null, 'Tue': null, 'Wed': null,
        'Thu': null, 'Fri': null, 'Sat': null, 'Sun': null
    };

    // --- Step 1: Sum up the values for the days we have ---
    for (const dateString in D) {
        // Create a Date object from the input string.
        // Using getUTCDay() is safer to avoid timezone issues.
        const date = new Date(dateString);
        const dayIndex = (date.getUTCDay() + 6) % 7; // This makes Monday=0, Sunday=6
        const dayName = daysOfWeek[dayIndex];
        const value = D[dateString];

        // If this is the first time we see this day, start its total at 0.
        if (weeklyTotals[dayName] === null) {
            weeklyTotals[dayName] = 0;
        }
        // Add the value to that day's total.
        weeklyTotals[dayName] += value;
    }

    // --- Step 2: Fill in the missing days ---
    // We'll loop through the week to find gaps.
    for (let i = 0; i < 7; i++) {
        // Check if the current day is missing.
        if (weeklyTotals[daysOfWeek[i]] === null) {
            // Find the previous day that has a value.
            let prevDayIndex = (i + 6) % 7; // Start checking from the day before
            while (weeklyTotals[daysOfWeek[prevDayIndex]] === null) {
                prevDayIndex = (prevDayIndex + 6) % 7;
            }

            // Find the next day that has a value.
            let nextDayIndex = (i + 1) % 7; // Start checking from the day after
            while (weeklyTotals[daysOfWeek[nextDayIndex]] === null) {
                nextDayIndex = (nextDayIndex + 1) % 7;
            }

            // Now we need to figure out how big the gap is.
            // For example, from Wednesday (index 2) to Saturday (index 5) is 3 steps.
            let stepsToNext = (nextDayIndex + 7 - prevDayIndex) % 7;
            
            const prevValue = weeklyTotals[daysOfWeek[prevDayIndex]];
            const nextValue = weeklyTotals[daysOfWeek[nextDayIndex]];

            // The value difference spread over the number of steps.
            const increment = (nextValue - prevValue) / stepsToNext;

            // How many steps is our current missing day from the previous valid day?
            let stepsFromPrev = (i + 7 - prevDayIndex) % 7;
            
            // Calculate the value and round it to the nearest whole number.
            weeklyTotals[daysOfWeek[i]] = Math.round(prevValue + stepsFromPrev * increment);
        }
    }

    return weeklyTotals;
}