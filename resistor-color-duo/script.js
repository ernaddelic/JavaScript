const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const value = ([color1, color2]) => parseInt(colors.indexOf(color1) + '' + colors.indexOf(color2));
let result = value(['brown', 'yellow']);
console.log(result);
