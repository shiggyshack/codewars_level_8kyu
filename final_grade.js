//Create a function that takes in two values: exam grade, and number of projects completed over the semester.
function finalGrade (exam, projects) {
  //Your grade is a 100 if you scored over 90% on the exam OR completed more than 10 projects.
  if(exam>90 || projects>10){
    return 100;
  }
  //Your grade is a 90 if you scored over 75% on the exam AND completed at least 5 projects.
  else if(exam>75 && projects>=5){
    return 90;
  }
  //Your grade is a 75 if you scored over 50% on the exam AND completed at least 2 projects.
  else if(exam>50 && projects>=2){
    return 75;
  }
  //If none of the previous conditions are met, you get a grade of 0.
  else{
   return 0; 
  }
}
