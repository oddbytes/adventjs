export default function maxProfit(prices) {
  const maxProfit = Math.max(
    ...prices.map((n, i) => Math.max(...prices.slice(i + 1)) - n)
  );
  return maxProfit > 0 ? maxProfit : -1;
}
