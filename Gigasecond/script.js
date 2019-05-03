const GIGASECOND_IN_MILLIS = 1e9 * 1e3;
export const gigasecond = (date) => {
  const time = date.getTime();
  return new Date(time + GIGASECOND_IN_MILLIS);
};
