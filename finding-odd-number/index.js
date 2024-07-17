// I need to go through the array with a for loop
// set a counter to 0
// Select first number, store the value in a variable
// compare with the rest of the array using a for loop
// if the numbers are equal, counter+=1
// outside the second for loop, see if the counter is odd with %: if it is return variable with the number

function findOdd(A) {
  //happy coding!
  for (i of A) {
    let count = 0;
    for (j of A) {
      if (j === i) {
        count += 1;
      }
    }
    if (count % 2 != 0) {
      return i;
    }
  }
  return 0;
}

const array = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
console.log(findOdd(array));
