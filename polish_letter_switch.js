//Create a function, that accepts a polish string, and replaces each of the specified polish letters with a corresponding english letter and return the new string.

//This is the hashmap variable for our character switch function.
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  //These methods conjoined will split the string into an array, map the old characters into the new characters, and join them back to one string, then return.
  return string.split('').map((c) => polishLetters[c] || c).join("");
}
