export const getTodayDate = () => {
  const date = new Date().toDateString();
  const dateArray = date.split(" ").slice(1, 4);
  [dateArray[0], dateArray[1]] = [dateArray[1], dateArray[0]];
  return dateArray.join(" ");
};

export const formatDate = (date) => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate;
};
