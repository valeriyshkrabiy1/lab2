//hw2
// Task 1 - sort an array with numbers
// const arrayNums = [7,101,3,1,9,11,100,111]
export function sortArray(array) {
  array.sort((a, b) => a - b);
  return array;
}

// Task 2 - filter an array of strings and keep only
// a string, that doesn't contain the word 'test'
// const stringsArray = [
//   'one-test', 'cat', 'parrot',
//   'banana', 'test-dog', 'dog'
// ]
export function filterStringsArray(array) {
  return array.filter(function (item) {
    return !item.includes("test");
  });
}

// Task 3 - find sum of numbers in array using .reduce()
// const numsArray = [
//   1, 3, 5, 10, 19, 100, 200, 33,
// ]
export function sumNumbersInArray(array) {
  return array.reduce(function (sum, current) {
    return sum + current;
  });
}
// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
// const arrayItems = [
//   { a: 1, b: 3 },
//   { a: 3, b: 3 },
//   { a: 6, b: 3 },
//   { a: 10, b: 10 },
//   { a: 41, b: 1 },
//   { a: 0, b: 4 }
// ];
export function filterAndExtendArrayItems(array) {
  let newArray = [];
  for (let i in array) {
    if (array[i]["a"] > 5) {
      array[i]["sum"] = array[i]["a"] + array[i]["b"];
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// Task 5 - merge arrays and remove duplicates
// const arNum = [1, 2, 3, 4, 5, 6];
// const arNum2 = [15, 6, 3, 20, 11];
export function mergeArraysWithoutDuplicates(array1, array2) {
  return Array.from(new Set(array1.concat(array2)));
}
