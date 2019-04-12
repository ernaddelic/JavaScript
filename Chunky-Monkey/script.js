const funArray = (arr, size) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i+=size) {
    newArray.push(arr.slice(i, size + i));
  }
  return newArray;
}
let result = funArray([1,2,3,4,5,6], 2);
console.log(JSON.stringify(result));
