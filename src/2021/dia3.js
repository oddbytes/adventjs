export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  if (letter.includes("{") || letter.includes("[")) return false;
  return (
    (letter.match(/\(/g) || []).length == (letter.match(/\)/g) || []).length &&
    /\([^\(\)]+\)/.test(letter)
  );
}
