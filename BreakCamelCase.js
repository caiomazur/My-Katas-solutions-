/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */


function solution(string) {
  const regex = /[A-Z]/g;

  if (string.match(regex)) return string.split("").map((char) => char.replace(regex, ` ${char}`)).join("");
  else return string;
}

const result = solution("stringTest");
console.log(result);
