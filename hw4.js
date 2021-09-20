// Tasks 1 -  convert array of strings
// from lowercase to uppercase
export function convertToUppercase(array) {
  var array1 = array.toLocaleString().toUpperCase().split(",");
  return array1;
}

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
export function calculateLetters(string, letter) {
  let count = string.match(/a/g).length;
  return count;
}

// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
export function replaceNumbers(string) {
  let newStr = string.replace(/[0-9]/g, " ");
  return newStr;
}

// Task 4 - sort strings in array
export function sortArray(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// array - ["osmos", "uterque", "water", "crop",
//         "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
export function buildStringUsingIndex(array, index) {
  let result = "";
  for (let element of array) {
    if (index < element.length) {
      result += element[index];
    } else result += " ";
  }
  return result;
}

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
export function palindromeValidator(str) {
  var str2 = str.split("").reverse().join("");
  console.log(str2);
  if (str == str2) {
    return "The string is palindrome";
  } else {
    return "The string is not palindrome";
  }
}
