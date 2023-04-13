/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
  let xoCount = {
    x: 0,
    o: 0,
  };
  str.toLowerCase().split("").forEach((char) => {
      char === "x" ? (xoCount[char] += 1) : (xoCount[char] += 0);
      char === "o" ? (xoCount[char] += 1) : (xoCount[char] += 0);
    });
  return xoCount["x"] === xoCount["o"] ? true : false;
}

console.log(XO("ooxx"));
