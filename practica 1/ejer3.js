//3. Crear una funcion que reciba un arregolo de numeros y devuelva en un objeto a los pares e impares
//let obj = miFuncion([1,2,3,4,5])
//console.log(obj) // {pares: [2,4], impares: [1,3,5]}
const miFuncion = (numeros) => {
    let obj = {pares: [], impares: []};
    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            obj.pares.push(numeros[i]);
        }
        else {
            obj.impares.push(numeros[i]);
        }
    }
    return obj;
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj);