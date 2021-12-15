export default function checkSledJump(heights) {
  const maxIndex = heights.indexOf(Math.max(...heights));
  return (
    maxIndex != 0 &&
    maxIndex != heights.length - 1 && //sube y baja
    heights.slice(0, maxIndex).every((h, i) => h < heights[i + 1]) && //sube de forma estricta
    heights
      .slice(maxIndex)
      .every((h, i) => h > (heights[i + maxIndex + 1] ?? -1))
  ); //baja de forma estricta
}
