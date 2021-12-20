function countPackages(carriers, carrierID) {
  const carrier = carriers.find((c) => c[0] === carrierID);
  return carrier[2].length
    ? carrier[1] +
        carrier[2].reduce((a, c) => a + countPackages(carriers, c), 0)
    : carrier[1];
}

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log(countPackages(carriers, "dapelu")); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

console.log(countPackages(carriers2, "camila")); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
