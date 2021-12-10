export default function listGifts(letter) {
  const objetos = letter.split(" ").filter((o) => o.length > 0 && o[0] != "_");
  const regalos = {};
  objetos.forEach((o) => {
    if (regalos[o]) regalos[o]++;
    else regalos[o] = 1;
  });
  return regalos;
}
