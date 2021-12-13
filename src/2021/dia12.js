function getMinJump(obstacles) {
  //Devolver el menor numero que no es divisor de indices los obstaculos

  // Version con arrays, menos eficiente porque calcula todos los saltos posibles para devolver finalmente el minimo
  // return Math.min(...Array.from(Array(9).keys())
  //   .map((x) => x + 1)
  //   .filter((n) => !obstacles.some((o) => o % n == 0)));

  for (let s = 2; s < 11; s++) if (!obstacles.some((o) => o % s == 0)) return s
}
