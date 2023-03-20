// Counting the Duplicates

function duplicateCount(text) {
  //...
  let wordsArr = text.toLowerCase().split("");
  let repeatedArr = wordsArr.filter((char, i, arr) => {
    return arr.indexOf(char) !== i && arr.lastIndexOf(char) == i;
  });
  return repeatedArr.length;
}
