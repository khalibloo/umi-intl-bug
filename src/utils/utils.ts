import { getIntl } from "umi";

export const formatPrice = (currency: string, amount: number) => {
  const intl = getIntl();
  return intl.formatNumber(amount, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
