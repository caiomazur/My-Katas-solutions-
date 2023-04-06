/* For a given DNA genetic code represented by a string, count the number of times the letters A (adenine), C (cytosine), G (guanine) and T (thymine) appears and return and object.

The input string may contain both upper and lower case characters.

For example:


var genCode = 'aCCggT';

getCountedNucleotides(genCode); // return {A: 1, C: 2, G: 2, T: 1}
Also, should a nucleotide type not be present within the string, it should still be present in the object returned with it's value as 0. For example:


var genCode = 'ACG';

getCountedNucleotides(genCode); // return {A: 1, C: 1, G: 1, T: 0} */

function getCountedNucleotides(genCode) {
  let count = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  const genCodeArr = genCode.split("");
  for (let i = 0; i < genCodeArr.length; i++) {
    if (genCodeArr[i] === "A" || genCodeArr[i] === "a") count["A"]++;
    else if (genCodeArr[i] === "C" || genCodeArr[i] === "c") count["C"]++;
    else if (genCodeArr[i] === "G" || genCodeArr[i] === "g") count["G"]++;
    else if (genCodeArr[i] === "T" || genCodeArr[i] === "t") count["T"]++;
  }
  console.log(genCodeArr);
  console.log(count);
  return count;
}

const genCode = "aCCggT";
const result = getCountedNucleotides(genCode);
console.log(result);
