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

// Try 3

// const removeDuplicateLetters = (input) => {
//   let inputArr = input.split("");

//   let charDict = {};
//   inputArr.forEach((elem) => {
//     charDict[elem] = charDict[elem] + 1 || 1;
//   });
//   const dictKeys = Object.keys(charDict);
//   const outputLength = dictKeys.length;

//   const combinations = (str) => {
//     var fn = function (active, rest, a) {
//       if (!active && !rest) return;
//       if (!rest) {
//         a.push(active);
//       } else {
//         fn(active + rest[0], rest.slice(1), a);
//         fn(active, rest.slice(1), a);
//       }
//       return a;
//     };
//     return fn("", str, []);
//   };

//   return combinations(input)
//     .filter((word) => word.length === outputLength)
//     .sort()
//     .find((possible) => {
//       const checkDict = {};
//       let arrPossbile = possible.split("");
//       arrPossbile.forEach((elem) => {
//         checkDict[elem] = true;
//       });
//       return Object.keys(checkDict).length === possible.length;
//     });
// };

// Try 4

const removeDuplicateLetters = (s) => {
  // Stores the frequency of characters
  var cnt = Array(26).fill(0);

  // Mark visited characters
  var vis = Array(26).fill(false);

  var n = s.length;

  // Stores count of each character
  for (var i = 0; i < n; i++) cnt[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;

  // Stores the resultant string
  var res = "";

  for (var i = 0; i < n; i++) {
    // Decrease the count of
    // current character
    cnt[s[i].charCodeAt(0) - "a".charCodeAt(0)]--;

    // If character is not already
    // in answer
    if (!vis[s[i].charCodeAt(0) - "a".charCodeAt(0)]) {
      // Last character > S[i]
      // and its count > 0
      while (
        res.length > 0 &&
        res[res.length - 1].charCodeAt(0) > s[i].charCodeAt(0) &&
        cnt[res[res.length - 1].charCodeAt(0) - "a".charCodeAt(0)] > 0
      ) {
        // Mark letter unvisited
        vis[res[res.length - 1].charCodeAt(0) - "a".charCodeAt(0)] = 0;
        res = res.substring(0, res.length - 1);
      }

      // Add s[i] in res and
      // mark it visited
      res += s[i];
      vis[s[i].charCodeAt(0) - "a".charCodeAt(0)] = 1;
    }
  }

  // Return the resultant string
  return res;
};

console.log(removeDuplicateLetters("thesqtitxyetpxloeevdeqifkz"));
// console.log("a" < "h");
// let inputArr = input.split("");
// const letterCountDict = {};
// let charDict = {};
// let letterCountArr = [];
// for (let i = 0; i < inputArr.length; i++) {
//   inputArr.forEach((elem) => {
//     letterCountDict[elem] = letterCountDict[elem] + 1 || 1;
//     letterCountArr.push(letterCountDict);

//     //charDict[elem] = true;
//   });
// }

// //console.log(letterCountArr);
// const dictKeys = Object.keys(charDict);
// const outputLength = dictKeys.length;

// let resultArr = [];

// for (let i = 0; i < inputArr.length; i++) {
//   let output = [];
//   for (let j = i; j < inputArr.length; j++) {
//     if (!output.find((char) => inputArr[j] === char)) {
//       output.push(inputArr[j]);
//     } else {
//       //letterCountDict[inputArr[j]] = letterCountDict[inputArr[j]] + 1 || 1;
//       //let curItem = letterCountDict[inputArr[j]];
//       // console.log(`${inputArr[j]}: ${curItem}`);
//       //console.log(letterCountDict);
//       // if (curItem === i) {
//       //   output.push(inputArr[j]);
//       //   // console.log(inputArr[j]);
//       // }
//     }
//   }
//   resultArr.push(output.join(""));
// }

// let filteredResult = resultArr.filter((word) => word.length === outputLength);
// return resultArr.sort();

// console.log(removeDuplicateLetters("cbacdcbc"));

// let resultArr = [];
// for (let i = 0; i < outputLength + 1; i++) {
//   let output = [];
//   for (let j = 0; j < inputArr.length; j++) {
//     if (charDict[inputArr[j]] === 1) {
//       output.push(inputArr[j]);
//     } else {
//     }
//     // if (!output.find((char) => inputArr[j] === char)) {
//     //   output.push(inputArr[j]);
//     // }
//   }
//   resultArr.push(output.join(""));
// }
// let filteredResult = resultArr.filter((word) => word.length === outputLength);
// console.log(resultArr);
// console.log(resultArr.sort()[0]);
// return resultArr.sort()[0];
