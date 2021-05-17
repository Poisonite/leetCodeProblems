// const simplifyPath = (input) => {
// // Break path down to array of individual chars to clean slashes
// let pathSlashArr = path.split('');
// // Add beginning slash if not present
// if (pathSlashArr[0] !== '/') {
//   pathSlashArr.unshift('/');
// }
// // Remove any duplicate slashes
// pathSlashArr.forEach((char, index) => {
//   if (char === '/') {
//     if (pathSlashArr[index + 1] === '/') {
//       pathSlashArr.splice(index + 1, 1);
//     }
//   }
// });
// // Remove ending slash if present
// if (pathSlashArr[pathSlashArr.length - 1] === '/') {
//   pathSlashArr.splice(pathSlashArr.length - 1, 1);
// }
// // Create a unified string with cleaned slashes
// let slashPath = pathSlashArr.join('');
// // Create new split array from slash cleaned path
// // This split is done by each section so that path can be tracked
// let trackPathArr = slashPath.split('/');
// let trackPathDup = slashPath.split('/');
// // Store directory level as it changes
// let dirLvl = 0;
// for (let i = 0; i < trackPathArr.length; i++) {
//   const curElement = trackPathArr[i];
//   console.log('Current Element:', curElement);
//   if (curElement === '.') {
//     // trackPathDup.splice(i, 1);
//   }
//   if (curElement === '..') {
//     // dirLvl--;
//     // if (dirLvl < 0) {
//     //   trackPathDup.splice(i, 1);
//     //   dirLvl = 0;
//     //   // console.log(trackPathDup);
//     // } else {
//     //   trackPathDup.splice(i - 1, 1);
//     // }
//     // trackPathDup.splice(i, 1);
//     dirLvl--;
//     // trackPathDup.splice(i, 1);
//   }
//   if (curElement !== '..' && curElement !== '.' && curElement !== '') {
//     dirLvl++;
//   }
//   console.log(dirLvl);
// }
// // Return final, cleaned result
// if (trackPathDup.join('/') === '') {
//   return '/';
// }
// return trackPathDup.join('/');

//   let resolvedPath = path.resolve(input);
//   let resPathArr = resolvedPath.split('\\');
//   resPathArr.splice(0, 1);
//   final = resPathArr.join('/');
//   return `/${final}`;
// };

var path = require('path');
const simplifyPath = (input) => {
  let resolvedPath = path.resolve(input);
  let resPathArr = resolvedPath.split('\\');
  resPathArr.splice(0, 1);
  final = resPathArr.join('/');
  return `/${final}`;
};

console.log(simplifyPath('/home/'));

// let resolvedPath = path.resolve('/home/');
// let resPathArr = resolvedPath.split('\\');
// resPathArr.splice(0, 1);
// final = resPathArr.join('/');
// final = `/${final}`;

// console.log(final);
