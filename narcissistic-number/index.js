function narcissistic(value) {
  // Code me to return true or false
  const digits = value.toString().split("");
  const realDigits = digits.map(Number);
  console.log(realDigits.length);
  let result = 0;
  for (i of realDigits) {
    console.log(i);
    result += i ** realDigits.length;
  }
  console.log(result);
  if (result === value) {
    return true;
  } else {
    return false;
  }
}

console.log(narcissistic(122));
