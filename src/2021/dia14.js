function missingReindeer(ids) {
  // La respuesta es la diferencia entre la suma de los n primeros numeros (n^2+n)/2 y la suma de los recibidos.

 return (ids.length*ids.length+ids.length)/2-ids.reduce((a,b)=>a+=b,0)

}
