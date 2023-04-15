function periodIsLate(last, today, cycleLength) {
  // Calculate the time difference between last and today in milliseconds
  const timeDifferenceInMillis = today - last;
  
  // Convert the time difference from milliseconds to days
  const timeDifferenceInDays = timeDifferenceInMillis / (24 * 60 * 60 * 1000);
  
  // Compare the time difference with cycleLength
  if (timeDifferenceInDays > cycleLength) {
    return true; // Period is late
  } else {
    return false; // Period is not late
  }
}
