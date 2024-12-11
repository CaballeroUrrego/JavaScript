// Función caja negra que toma dos listas y devuelve una lista combinada
function combinarListas(lista1, lista2) {
    // Concatenamos ambas listas y ordenamos
    return lista1.concat(lista2).sort((a, b) => a - b);
}

// Listas de entrada
const listaImpares = [1, 3, 5];
const listaPares = [2, 4, 6];

// Llamamos a la función y obtenemos la salida
const resultado = combinarListas(listaImpares, listaPares);

// Salida (lista combinada y ordenada)
console.log(resultado); // [1, 2, 3, 4, 5, 6]
