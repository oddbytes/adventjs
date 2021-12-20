function decodeNumbers(symbols) {
  const values = new Map([
    [".", 1],
    [",", 5],
    [":", 10],
    [";", 50],
    ["!", 100],
  ]);

  return symbols.split("").reduce((a, symbol, index, array) => {
    const sign = // El signo del elemento depeende del siguiente
      [...values.keys()].indexOf(symbol) <
      [...values.keys()].indexOf(array[index + 1] ?? ".")
        ? -1
        : 1;
    return (a += values.get(symbol) * sign);
  }, 0);
}

/*
Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
  */

decodeNumbers("..."); // 3
decodeNumbers(".,"); // 4 (5 - 1)
decodeNumbers(",."); // 6 (5 + 1)
decodeNumbers(",..."); // 8 (5 + 3)
decodeNumbers(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers(".;"); // 49 (50 - 1)
decodeNumbers("..,"); // 5 (-1 + 1 + 5)
decodeNumbers("..,!"); // 95 (1 - 1 - 5 + 100)
decodeNumbers(".;!"); // 49 (-1 -50 + 100)
decodeNumbers("!!!"); // 300
decodeNumbers(";!"); // 50
decodeNumbers(";.W"); // NaN
