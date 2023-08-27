export const getTodayDate = () => {
  const date = new Date().toDateString();
  const dateArray = date.split(" ").slice(1, 4);
  [dateArray[0], dateArray[1]] = [dateArray[1], dateArray[0]];
  return dateArray.join(" ");
};
