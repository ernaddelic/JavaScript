const numbers = [40, 50, 60];
const whereDoIBelong = (arr, num) => {
  return arr.concat(num).sort((a,b) => a - b).indexOf(num);  
}
let result = whereDoIBelong(numbers, 55);
console.log(result);
console.log(numbers);
