const removeDuplicateLetters = (input) => {
  let inputArr = input.split("");

  let startPoint = 0;
  inputArr.forEach((char, i) => {
    if (char === "a") {
      if (startPoint > 0) {
        return;
      }
      startPoint = i;
      return;
    }
    return;
  });
  inputArr.splice(0, startPoint);
  // console.log(inputArr);

  let outputArr = [];
  inputArr.forEach((elem) => {
    if (outputArr.find((char) => elem === char)) {
      // console.log(`Found ${elem}, exiting`);
      return;
    }
    outputArr.push(elem);
  });
  console.log(outputArr.join(""));
  return outputArr.join("");
};
