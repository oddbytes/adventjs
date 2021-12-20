function learn(time, courses) {
  // Obtiene la suma de tiempos de cada curso con los demas (los posteriores)
  const comb = courses.map((c, i) => courses.slice(i + 1).map((c2) => c + c2));
  //Encontrar la combinacion mas cercana a la buscada
  const max = Math.max(
    ...comb
      .flat()
      .filter((n) => n <= time) //Fuera combinaciones que superen las horas
      .sort((a, b) => a - b)
  );
  //Buscar los indices de la mejor combinacion de horas
  for (let i = 0; i < comb.length; i++)
    if (comb[i].indexOf(max) > -1) return [i, i + comb[i].indexOf(max) + 1];
  return null;
}

console.log(learn(10, [2, 3, 8, 1, 4])); // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
console.log(learn(15, [2, 10, 4, 1])); // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.
console.log(learn(25, [10, 15, 20, 5])); // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos
console.log(learn(8, [8, 2, 1])); // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.
console.log(learn(8, [8, 2, 1, 4, 3])); // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.
console.log(learn(4, [10, 14, 20])); // null -> no nos da tiempo a hacer dos cursos
console.log(learn(5, [5, 5, 5])); // null -> no nos da tiempo a hacer dos cursos
