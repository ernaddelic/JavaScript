const confirmEnding = (str, target) => {
  return str.slice(str.length - target.length) === target;
}
let result = confirmEnding("He has to give me a new name", "name");
console.log(result);
