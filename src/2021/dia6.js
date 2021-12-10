export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  const n = numbers.find(
    (n, i) => n + numbers.slice(i + 1).find((n2) => result - n == n2) == result
  );
  if (n != undefined) return [n, result - n];
  return null;
}
