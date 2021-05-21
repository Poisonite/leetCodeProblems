let sortColors = (nums) => {
  // Get Max Val
  let max;
  nums.forEach((num, index) => {
    if (index === 0) {
      max = num;
      return;
    }
    if (num > max) {
      max = num;
      return;
    }
    return;
  });

  // Get Min Val
  let min;
  nums.forEach((num, index) => {
    if (index === 0) {
      min = num;
      return;
    }
    if (num < min) {
      min = num;
      return;
    }
    return;
  });

  // Sort using the min and max as ref points
  let i = min,
    j = 0,
    length = nums.length,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < length; i++) {
    count[nums[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      nums[j] = i;
      j++;
      count[i]--;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
