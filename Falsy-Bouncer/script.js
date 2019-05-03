const falsyBouncer = (arr) => {
  return arr.filter(Boolean);
}
console.log(falsyBouncer([7, undefined, "", false, 9]));
