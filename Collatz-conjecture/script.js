const steps = num => {
  let count = 0;
  if (num <= 0) {
    throw new Error ('Only positive numbers are allowed')
  }
  while (num > 1) {
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num /= 2;
    }
    count++;
  }
  return count;
};
console.log(steps(16));
