const sum = (a, b) => {
  // sum takes two arguments
  // and returns their sum

}

const genNums = (n) => {
  // genNums takes a single number as an argument
  // it should return an array of the numbers from 1..n

}

const greeter = (name) => {
  // greeter takes a string as an argument (a person's name)
  // it should return a string greeting the person
  // in the form of: Hello, <name>
}

const reverseString = (str) => {
  // reverseString takes a string
  // and should return the reverse of the string
  // e.g., reverseString('cat') => 'tac'
}

const flipBool = (arr) => {
  // flipBool takes an array of Boolean values
  // it should call map on the array and flip
  // each Boolean value to its opposite,
  // e.g., flipBool([true]) => [false]
  //       flipBool([false, true]) => [true, false]
  //       etc
  // then return the new array
  // Be sure to use map()!
}

module.exports = {
  sum,
  genNums,
  greeter,
  reverseString,
  flipBool
};

