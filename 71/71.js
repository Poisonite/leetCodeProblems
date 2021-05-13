const simplifyPath = (path) => {
  let pathArr = path.split('');
  if (pathArr[0] !== '/') {
    pathArr[0] = '/';
  }
  pathArr.forEach((char, index) => {
    if (char === '/') {
      if (pathArr[index + 1] === '/') {
        pathArr = pathArr.splice(index + 1, 1);
      }
    }
  });
};
