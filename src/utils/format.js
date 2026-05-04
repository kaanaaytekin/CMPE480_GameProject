const formatter = new Intl.NumberFormat('en-US');
export const formatMoney = (n) => formatter.format(n);
