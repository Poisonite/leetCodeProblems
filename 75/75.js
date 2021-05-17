const sortColors = (nums) => {
  let zeroArr = [];
  let oneArr = [];
  let twoArr = [];
  let result = [];
  nums.forEach((elem) => {
    if (elem === 0) {
      zeroArr.push(elem);
    }
    if (elem === 1) {
      oneArr.push(elem);
    }
    if (elem === 2) {
      twoArr.push(elem);
    }
  });
  zeroArr.forEach((elem) => {
    result.push(elem);
  });
  oneArr.forEach((elem) => {
    result.push(elem);
  });
  twoArr.forEach((elem) => {
    result.push(elem);
  });
  console.log(nums);
  return result;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
