//Create a function, that accepts three parameters, where the first two parameters should be integers and the last parameter should be a symbol representing a mathematical operation. If a and b are numbers and the operation is one of the four basic operations, return the appropriate calculation; otherwise, return a message stating something was incorrect with the parameters.
function calculator(a,b,sign){
  //The conditional checks a & b to see if they are approriate parameters.
  if(typeof a === 'number' && typeof b === 'number'){
   //Using a switch case, determine which operation is to take place and return that result, default to the error message
   switch(sign){
       case '+': return a+b;
       case '*': return a*b;
       case '-': return a-b;
       case '/': return a/b;
       default: return 'unknown value';
   }
    //Return the error message if the conditional check on values a and b did meet requirements.
  }else{
    return 'unknown value';
  }
}
