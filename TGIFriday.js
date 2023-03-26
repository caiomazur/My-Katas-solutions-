function lastDayIsFriday(initialYear, endYear) {
  // If only one year is provided, set endYear to be equal to initialYear
  if (endYear === undefined) {
    endYear = initialYear;
  }

  // Initialize a count variable to keep track of the number of times a month ends on Friday
  let count = 0;

  // Loop through each year in the given range
  for (let y = initialYear; y <= endYear; y++) {
    // Loop through each month in the year (month is 0-indexed in JavaScript)
    for (let month = 0; month < 12; month++) {
      // Get the last day of the month using the Date method
      // Note that I pass month+1 to get the next month and day 0 to get the last day of the current month
      const lastDayOfMonth = new Date(y, month + 1, 0);

      // Check if the last day of the month is a Friday (Friday is represented by the number 5 in JavaScript)
      if (lastDayOfMonth.getDay() === 5) {
        count++;
      }
    }
  }
  return count;
}
