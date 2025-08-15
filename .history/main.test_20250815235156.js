// --- TEST CASES ---

// Test Case 1: The first example from the problem (no missing days)
const testInput1 = {
    '2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8,
    '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2
};
console.log("Test Case 1:");
console.log(solution(testInput1));
// Expected Output: { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }


// Test Case 2: The second example from the problem (Thu & Fri missing)
const testInput2 = {
    '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14,
    '2020-01-06': 2, '2020-01-07': 4
};
console.log("\nTest Case 2:");
console.log(solution(testInput2));
// Expected Output: { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }


// Test Case 3: Custom test with a gap between Sunday and Tuesday
const testInput3 = {
    '2020-01-05': 10, // Sunday
    '2020-01-07': 16  // Tuesday
};
console.log("\nTest Case 3:");
console.log(solution(testInput3));
// Expected Output: { Mon: 13, Tue: 16, Wed: null..., Thu: null..., Fri: null..., Sat: null..., Sun: 10 }
// After interpolation: { Mon: 13, Tue: 16, Wed: 14, Thu: 12, Fri: 11, Sat: 10, Sun: 10 } (approx values, depends on full week)
// Let's re-run the logic: Gap is Tue to Sun. Prev is Tue(16), Next is Sun(10). Steps=5.
// Increment = (10-16)/5 = -1.2
// Wed = 16 - 1.2 = 14.8 -> 15
// Thu = 14.8 - 1.2 = 13.6 -> 14
// Fri = 13.6 - 1.2 = 12.4 -> 12
// Sat = 12.4 - 1.2 = 11.2 -> 11
// Let's check my code output for this one.
// Corrected Expected Output: { Mon: 13, Tue: 16, Wed: 15, Thu: 14, Fri: 12, Sat: 11, Sun: 10 }