export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  const width = height * 2 - 1;
  let tree = "";
  for (let row = 0; row < height; row++) {
    const asteriscos = "*".repeat(2 * row + 1);
    const blanco = "_".repeat((width - asteriscos.length) / 2);
    tree += blanco + asteriscos + blanco + "\n";
  }
  const pie =
    "_".repeat(Math.ceil(width / 2) - 1) +
    "#" +
    "_".repeat(Math.ceil(width / 2) - 1);
  tree += pie + "\n" + pie;
  return tree;
}
