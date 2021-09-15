//hw1
// Task 1 - should return the string "Hello, World!"
export function sayHelloWorld() {
    return "Hello, World!";
  }
  
  // Task 2 - should return the string "Hello, Somename!"
  export function sayHello(name) {
    return "Hello, " + name + "!";
  }
  
  // Task 3 - should return sum of two numbers
  // a + b
  export function sumNumbers(a, b) {
    return a + b;
  }
  
  // Task 4 - should return a value by key in provided object
  // provided object - { name: 'Name' }
  // result - 'Name'
  export function valueByKeyInObject(key, obj = {}) {
    return obj.[key];
  }
  
  // Task 5 - should return an object with new field and value
  // without object - { name: 'Name' }
  // with an object - { name: 'Name', age: 100 }
  export function extendObject(key, value, obj = {}) {
    obj[key] = value;
    return obj;
  }
  
  // Task 6 - should return a larger argument increased by 100
  // with (10, 7) output - 110
  // with (10, 77) output - 177
  export function increaseBiggerArg(a, b) {
  if(a>b){
    return a + 100
  }else{
    return b + 100
  }
  }
  
  // Task 7 - calculate the area of a figure using
  // provided type: "square", "circle", or "rectangle"
  // for circle "a" is radius
  // for square only "a" needed
  export function calculateFigureArea(figureType, a, b) {
    if (figureType == "square") {
      return Math.pow(a, 2);
    } else if (figureType == "circle") {
      return Math.pow(a, 2) * Math.PI;
    } else if (figureType == "rectangle") {
      return a * b;
    }
  }
  