// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}
// toUpperCase devuelve la string con mayusculas.
//slice lo que hace es devolver el resto de la palabra y entre parentesis desde donde empezaria.
//otra forma de explicar el slice, es diciendo que corta la palabra desde donde le indiquemos
function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

// No es necesario colocar return, primero porque pide solo invocar y segundo al invocarla ya retorna la funcion
function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 /* let suma = 0;
  for (let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
  }
  cb(suma);
}
*/
let suma = numeros.reduce(function (acc, valAct){
  return acc +valAct;
})
cb (suma);
}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (let i = 0; i < array.length; i++){
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var newArray = array.map(function(e){
    return cb(e);
 })
 return newArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(e => e[0] === "a" );
}
//e significa cada uno de los elementos
//=> funcion flecha
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
