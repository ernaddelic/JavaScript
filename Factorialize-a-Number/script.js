const factorialize = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num -1);
};
let result = factorialize(4);
console.log(result);
