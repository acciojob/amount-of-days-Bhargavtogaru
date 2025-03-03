function daysOfAYear(year) {
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;  // Leap year
    } else {
        return 365;  // Common year
    }
}
