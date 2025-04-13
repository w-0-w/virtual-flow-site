const CURRENCY_STR = 'USDT';

const formatTrueAmountDisplay = (amount: number) => {
  return `${amount.toFixed(2)} ${CURRENCY_STR}`;
};

export const formatAmountDisplay = (amount: number) => {
  return amount === -1 ? '-' : formatTrueAmountDisplay(amount);
};

export const formatTotalAmountDisplay = (amount: number) => {
  return formatTrueAmountDisplay(amount === -1 ? 0 : amount);
};

export const formatCountDisplay = (count: number) => {
  return count === -1 ? '-' : `${count}`;
};
