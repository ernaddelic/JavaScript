function nextInLIne(arr, item) {
  arr.push(item);
  return arr.shift();
}

var myArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(myArr));
console.log(nextInLIne(myArr, 6));
console.log("After: " + JSON.stringify(myArr));
