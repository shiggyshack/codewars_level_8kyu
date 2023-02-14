//You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:
//Weekday Month Day, time e.g., Friday May 2, 7pm
//You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

function shortenToDate(longDate) {
  //Create an array that splits the Weekday Month Day, time format into [Weekday Month Day, ,time], using the ',' character
  let arrayL = longDate.split(',');
  //Return only the first element in the array, the Weekday Month Day
  return arrayL[0];
}
