export default function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1];
  const c = coins.map((c) => {
    const n = Math.floor(change / c);
    change -= n * c;
    return n;
  });
  return c.reverse();
}
