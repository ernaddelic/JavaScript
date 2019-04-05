const dartsFunction = (x, y) => {
  let points = 0;
  if (isNaN(x) || isNaN(y)) {
    points = null;
  } else if (x > 10 && y > 10) {
    points = 0;
  } else if ((x > 5 || y > 5) && (x <= 10 && y <= 10)) {
    points = 1;
  } else if ((x > 1 || y > 1) && (x <= 5 && y <= 5)) {
    points = 5;
  } else if (x <=1 && y <=1) {
    points = 10;
  }
  return points;
}
