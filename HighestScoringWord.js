/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

/* iterate through the ASCII codes for the lowercase letters of the alphabet (97 to 122).

For each letter, the code uses String.fromCharCode(i) to convert the ASCII code back into a letter, and then assigns a value to that letter in the letterValues object. The value is calculated by subtracting 96 from the ASCII code, which gives the numerical position of the letter in the alphabet (since 'a' has an ASCII code of 97). */
function high(x) {
  let letterValues = {};

  for (let i = 97; i <= 122; i++) {
    letterValues[String.fromCharCode(i)] = i - 96;
  }

  let stringToValues = x.split(" ").map((word) => {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += letterValues[word[i]];
    }
    //console.log(score);
    return score;
  });
  let maxScore = 0;
  for (let i = 0; i < stringToValues.length; i++) {
    if (maxScore < stringToValues[i]) maxScore = stringToValues[i];
  }

  let maxScoreIndex = stringToValues.indexOf(maxScore);

  return x.split(" ")[maxScoreIndex];
}

const result = high("man i need a taxi up to ubud");
console.log(result);
