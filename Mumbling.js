/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
  // Make everything lower case, separate each character and turn it into an array:
  const chars = s.toLowerCase().split("");
  // Make the first char uppercase.
  // The number of characters in each element should be determined by it's index:
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== 0) {
      chars[i] = chars[i].toUpperCase() + chars[i].repeat(i);
    }
  }
  //console.log(chars);
  /* 
  // Add a dash to each character, except for the last one:
  const dashes = chars.map((char, index) => {
    // If the index is not the last one, than add the dash:
    if (index !== chars.length - 1) {
      return char + "-";
    } else {
      return char;
    }
  }); */
  //console.log(dashes);
  const mumbling = chars.join("-");
  console.log(mumbling);
  return mumbling;
}

accum("abcd");
