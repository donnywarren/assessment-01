/*
 * sum takes two arguments
 * and returns their sum
 */
const sum = (a, b) => {
  return (a + b);

}

/*
 * genNums takes a single number as an argument
 * it should return an array of the numbers from 1..n
 * Ex genNums(2) => [1, 2]
 */
const genNums = (n) => {
  const newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return (newArr);
}

/*
 * greeter takes a string as an argument (a person's name)
 * it should return a string greeting the person
 * in the form of: Hello, <name>
 */
const greeter = (name) => {

  return (`Hello, ${name}`);

}


/*
 * reverseString takes a string
 * and should return the reverse of the string
 * e.g., reverseString('cat') => 'tac'
 */
const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return (newString);
}




/*
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */
const flipBool = (arr) => {
  const newFlipBool = arr.map(function (word) {

    if (word === "true") {
      newFlipBool.push("false");
    } else if (word === "false") {
      newFlipBool.push("true");
    }
  })

  return (newFlipBool);

}

module.exports = {
  sum,
  genNums,
  greeter,
  reverseString,
  flipBool
};

