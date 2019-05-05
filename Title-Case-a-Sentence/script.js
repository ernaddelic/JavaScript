const titleCase = (str) => {
  const newStr = str.toLowerCase().split(' ');
  const result = newStr.map(n => {
    return n.replace(n.charAt(0), n.charAt(0).toUpperCase());
  });
  return result.join(' ');
}
console.log(titleCase('Im a little tea pot'));
