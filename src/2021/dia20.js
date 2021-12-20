function pangram(letter) {
  if (!letter.toLowerCase().includes("ñ")) return false;

  const charCodes = letter
    .normalize("NFD") //normalizar caracteres
    .replace(/\p{Diacritic}/g, "") //eliminar tildes y diacríticos
    .toUpperCase()
    .split("")
    .map((c) => c.charCodeAt(0));

  for (let i = 65; i < 91; i++) if (charCodes.indexOf(i) < 0) return false; //letras entre A y Z
  return true;
}

console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
  pangram(
    "Jovncllo mponzoñado y con walkman: ¡quë fÏgurota xhbs!ññññ¿?¿?<<<>>> áàäâ ñ Ñ Á"
  )
); // true
console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false
