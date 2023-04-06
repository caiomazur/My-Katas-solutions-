/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

STRINGSFUNDAMENTALS */

function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") count++;
    }
    return count;
  }

























/* let countVowel = 0;
vowelsArray = ['a', 'e', 'i', 'o', 'u']
function getCount(str) {
  for (i = 0; i < str.length; i++) {
    
    if (str[i] === 'a') {
      countVowel++;
    }
    else if (str[i] === 'e') {
      countVowel++;
    }
    else if(str[i] === 'i') {
      countVowel++;
    }
    else if (str[i] === 'o') {
      countVowel++;
    }
    else if (str[i] === 'u') {
      countVowel++;
    }
  };
  return countVowel;
};
  console.log(countVowel);
 */