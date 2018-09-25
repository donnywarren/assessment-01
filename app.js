function sum(a, b) {
  // sum takes two arguments
  // and returns their sum
  
}

function genNums(n) {
  // genNums takes a single number as an argument
  // it should return an array of the numbers from 1..n

}

function greeter(name) {
  // greeter takes a string as an argument (a person's name)
  // it should return a string greeting the person
  // in the form of: Hello, <name>
}

function capitalize(person) {
  // capitalize takes an object as an argument
  // that will have three properties:
  // 1. a name that includes a first and last name
  //   separated by a space (string)
  // 2. an age (number)
  // 3. an occupation (string)
  //
  // it should capitalize the first letter of both
  // the first and last name, update the person object,
  // and the person object
}

function flipBool(arr) {
  // flipBool
  return arr.map(val => !val);
}

module.exports = {
  sum,
  genNums,
  greeter,
  capitalize,
  flipBool
};

