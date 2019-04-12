const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};
let result = truncateString("Have a nice day", 5);
console.log(result);
