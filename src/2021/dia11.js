export default function shouldBuyFidelity(times) {
  const fidelity =
    250 +
    [...Array(times)].reduce(
      (a, _b, i) => (a += 12 * Math.pow(0.75, i + 1)),
      0
    );
  return fidelity < 12 * times;
}
