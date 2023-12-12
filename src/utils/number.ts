export const currency = "BDT";

export const formatPrice = (
  price: string | number = 0,
  locale = "en-US",
  currencyType: string = currency
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyType,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(Number(price || 0));
};

export const AddZero = (num: number) => {
  if (num < 10 && num > -10) {
    return num < 10 && num >= 0 ? `0${num}` : `-0${Math.abs(num)}`;
  }

  return num;
};

export const FloatNumber = (num: number, numberOfFloat: number = 2) => {
  return numberOfFloat === 0
    ? parseInt(num + "")
    : parseFloat(num.toFixed(numberOfFloat));
};
