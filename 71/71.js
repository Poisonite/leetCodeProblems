const simplifyPath = (input) => {
  const fixInput = `/${input}`;
  const slashStripped = fixInput.replace(/\/\//g, "/");
  let inputArr = slashStripped.split("/");

  outputArr = [];
  inputArr.forEach((segment) => {
    if (segment === "." || segment === "") {
      return;
    }
    if (segment === "..") {
      outputArr.pop();
      return;
    }
    outputArr.push(segment);
    return;
  });
  return `/${outputArr.join("/")}`;
};

console.log(simplifyPath("/home//foo/"));
