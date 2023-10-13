import numeral from "numeral";

export const formatPercentage = (percentage) => {
  const number = numeral(percentage).format("0");
  return parseInt(number);
};

export const formatPercentageTwoDecimal = (percentage) => {
  const number = numeral(percentage).format("-0.00");
  return number;
};

export const formatNumberToDecimal = (number, decimal) => {
  const formatString = "0." + "0".repeat(decimal);
  const formattedNumber = numeral(number).format(formatString);
  return formattedNumber;
};

export const formatCurrency = (currency) => {
  const number = numeral(currency).format("0,0.000a");
  return number;
};

export const formatPrice = (currency) => {
  const number = numeral(currency).format("0,0");
  return number;
};

export const calculatePercentage = (baseNumber, percentage) => {
  const number = numeral((percentage / baseNumber) * 100).format("0");
  return number;
};

export const addCommas = (price) => numeral(price).format(`0,0.00`);
