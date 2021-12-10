export default function contarOvejas(ovejas) {
  ovejas = ovejas.filter(
    (o) =>
      o.color == "rojo" &&
      o.name.toLowerCase().includes("n") &&
      o.name.toLowerCase().includes("a")
  );
  return ovejas;
}
