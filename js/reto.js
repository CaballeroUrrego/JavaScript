// Función caja negra que toma dos listas y un umbral
function procesarListas(lista1, lista2, umbral) {
  // 1. Concatenamos ambas listas y eliminamos elementos repetidos
  const listaCombinada = [...new Set([...lista1, ...lista2])];

  // 2. Filtramos la lista para incluir solo números primos mayores al umbral
  const listaPrimos = listaCombinada.filter(
    num =>
      num > umbral &&
      num % 2 !== 0 &&
      Array.from(
        { length: Math.floor(Math.sqrt(num)) + 1 },
        (_, i) => i * 2 + 1
      ).includes(num)
  );

  // 3. Agrupamos los números por su paridad (pares e impares)
  const gruposParidad = listaPrimos.reduce((acc, num) => {
    acc[num % 2 === 0 ? "pares" : "impares"] = (acc[
      num % 2 === 0 ? "pares" : "impares"
    ] || [])
      .concat(num);
    return acc;
  }, {});

  // 4. Calculamos el área de un triángulo equilátero formado por tres números primos consecutivos
  const areaTrianguloEquilatero = calcularAreaTrianguloEquilatero(
    gruposParidad["impares"]
  );

  // 5. Ordenamos la lista final basándonos en el área del triángulo equilátero
  return listaPrimos.sort(
    (a, b) =>
      calcularAreaTrianguloEquilatero([a, b]).area -
      calcularAreaTrianguloEquilatero([b, a]).area
  );
}

// Función auxiliar para calcular el área de un triángulo equilátero
function calcularAreaTrianguloEquilatero(numeros) {
  // Si hay menos de 3 números, el área es 0
  if (numeros.length < 3) return { area: 0 };
  const a = numeros[0],
    b = numeros[1],
    c = numeros[2];
  // Calculamos el semiperímetro
  const s = (a + b + c) / 2;
  // Devolvemos el área y la altura del triángulo
  return {
    area: Math.sqrt(s * (s - a) * (s - b) * (s - c)),
    altura: Math.sqrt(3) / 2 * a
  };
}

// Listas de entrada
const listaImpares = [1, 3, 5, 5, 7, 11, 13, 17, 19, 23];
const listaPares = [2, 4, 6, 6, 8, 10, 12, 14, 16, 18];

// Valor umbral
const umbral = 3;

// Llamamos a la función y obtenemos la salida
const resultado = procesarListas(listaImpares, listaPares, umbral);

// Salida (lista combinada, sin duplicados, filtrada por primos, agrupada por paridad, con área de triángulos equiláteros)
console.log(resultado);
