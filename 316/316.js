// const removeDuplicateLetters = (inputStr) => {
//   // Store unique chars in an array
//   let stripArr = [];
//   // Covert input string to an array where each char is an element
//   let inputArr = inputStr.split('');
//   // Store each char which has been seen for future reference
//   let charDict = {};
//   // Store sorted DeDupped string
//   let resultStr;

//   // Loop each char in the converted string and add chars which haven't been seen before
//   inputArr.forEach((char) => {
//     if (!charDict[char] === true) {
//       stripArr.push(char); // Add first time char to result
//       charDict[char] = true; // Add char to dictionary of seen chars
//     }
//   });

//   //   Combine each unique char into a unified string after sorting the string
//   resultStr = stripArr.sort().join('');

//   // Return the result
//   return resultStr;
// };

// Try 2

const removeDuplicateLetters = (input) => {
  let inputArr = input.split("");
  // console.log(inputArr);

  // let charDict = {};
  // inputArr.forEach((elem) => {
  //   charDict[elem] = true;
  // });
  // dictKeys = Object.keys(charDict);
  // sortedKeys = dictKeys.sort();
  // console.log(sortedKeys);

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

removeDuplicateLetters("cbacdcbc");
// console.log(removeDuplicateLetters("cbacdcbc"));
