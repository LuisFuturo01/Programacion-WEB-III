//Almacenar el resto de los elementos de un arreglo sin tomar en cuanta los dos primeros elementos de un arreglo, mediante desestructuracion

let [,,...resto] = [1, 2, 3, 4, 5];
console.log(resto);