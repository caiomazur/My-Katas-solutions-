// Create Phone Number

// Long one:

/* function createPhoneNumber(numbers){
    numbers.unshift("(");
    numbers.splice(4, 0, ")");
    numbers.splice(8, 0, "-");
    numbers.splice(5, 0, " ");
   let string = numbers.toString()
   const withoutCommas = string.replaceAll(',', '');
    console.log(withoutCommas);
    return withoutCommas;
  } */

// Short solution:

function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}
