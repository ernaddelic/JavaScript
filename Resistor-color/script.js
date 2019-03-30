const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorCode = (input) => {
  let result = 0;
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === input) {
      result += numbers[i];
    }
  }
  return result;
};
console.log(colorCode("orange"));
