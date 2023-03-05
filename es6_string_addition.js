//Create a function that concatenates two string parameters without using join or .concat method. Ensure that string1 and string2 are actually strings by casting them before concatenating them.
function joinStrings(string1, string2){
   string1 = String(string1);
   string2 = String(string2);
  return `${string1} ${string2}`
}
