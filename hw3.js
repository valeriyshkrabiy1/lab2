//hw3.js
/ Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
export function sumNumsInArrays(array1, array2) {
  return (
    array1.reduce(function (sum, current) {
      return sum + current;
    }) +
    array2.reduce(function (sum, current) {
      return sum + current;
    })
  );
}

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

//export function printEvenNumbers(n) {
for (let i = 2; i <= n; i += 2) {
  console.log(i + ",");
}

//  Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
export function reverseArrayItems(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
export function sumNumsSamePosition(array1, array2) {
  let array3 = [];
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      array3.push(array1[i] + array2[i]);
    }
  }

  return array3;
}

// Task 5 - find sum of all number in array using 'while' loop
export function sumNums(array) {
  var i = 0;
  var e = 0;
  while (i < array.length) {
    e = e + array[i];
    i++;
  }
  return e;
}

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
export function filterArrayWithStrings(array) {
  var outputArr = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i].length >= 4 && !array[i].match(/error/)) {
      outputArr.push(array[i]);
    } else {
      continue;
    }
    console.log(outputArr);
  }
}

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
export function factorial(n) {
  function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * factorialize(num - 1);
    }
  }
  return factorialize(n);
}
