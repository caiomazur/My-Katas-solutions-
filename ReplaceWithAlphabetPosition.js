/* Replace With Alphabet Position

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/

function alphabetPosition(text) {
  const regex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

  const textArr = text
    .toLowerCase()
    .split("")
    .map((char) => char.replace(regex, ""));
  const position = textArr.map((char) => {
    if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
      return (char = char.charCodeAt() - 96);
    }
  });
  const result = position.filter((elem) => elem !== undefined).join(" ");
  return result;
}
