function duplicateEncode(word) {
  // ...
  let encode = "";
  text = word.toLowerCase();
  for (i of text) {
    let counter = 0;
    for (j of text) {
      if (i === j) {
        counter += 1;
      }
    }
    if (counter > 1) {
      encode = encode + ")";
    } else {
      encode = encode + "(";
    }
  }
  return encode;
}

console.log(duplicateEncode("Success"));
