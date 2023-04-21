/* Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""*/

function order(words) {
  if (!words) return "";

  // split the input string into an array of words
  const wordsArr = words.split(" ");

  // create a new array to hold the sorted words
  const resultArr = [];

  // loop through the order of numbers
  for (let i = 1; i <= 9; i++) {
    // loop through the array of words
    for (let j = 0; j < wordsArr.length; j++) {
      // if the current word contains the current number in the order
      if (wordsArr[j].includes(i)) {
        // push the word to the result array
        resultArr.push(wordsArr[j]);
      }
    }
  }

  // join the sorted words together and return as a string
  return resultArr.join(" ");
}

const result = order("is2 Thi1s T4est 3a");
console.log(result);
