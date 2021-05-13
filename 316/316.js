const removeDuplicateLetters = (inputStr) => {
  // Store unique chars in an array
  let stripArr = [];
  // Covert input string to an array where each char is an element
  let inputArr = inputStr.split('');
  // Store each char which has been seen for future reference
  let charDict = {};
  // Store sorted DeDupped string
  let resultStr;

  // Loop each char in the converted string and add chars which haven't been seen before
  inputArr.forEach((char) => {
    if (!charDict[char] === true) {
      stripArr.push(char); // Add first time char to result
      charDict[char] = true; // Add char to dictionary of seen chars
    }
  });

  //   Combine each unique char into a unified string after sorting the string
  resultStr = stripArr.sort().join('');

  // Return the result
  return resultStr;
};

console.log(removeDuplicateLetters('cbacdcbc'));
