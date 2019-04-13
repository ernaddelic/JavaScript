const findElement = (arr, func) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
};
let result = findElement([1,3,5,8], num => num - 2 === 3);
console.log(result);
