function canReconfigure(from, to) {
  return (
    from.length == to.length && //cadenas de la misma longitud
    new Set(from).size == new Set(to).size
  );
}

let from = "BAL";
let to = "LIB";
canReconfigure(from, to); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

from = "aaaDDDmmm";
to = "aaaaDDmmm";
console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

from = "xxxqqqeeefffggg";
to = "xxxqqqeeefffgg";
canReconfigure(from, to); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

from = "abcdefghijkl";
to = "lkjihgfedcba";
canReconfigure(from, to); // false -> no tiene la misma longitud
