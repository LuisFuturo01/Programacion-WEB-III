//4. Crear una funcion que reciba un arreglo de numeros y devuelva el numero mayor y el menor, en un objeto
//let obj = miFuncion([3,1,5,4,2])
//console.log(obj) // {mayor: 5, menor: 1}
const miFuncion = (numeros) => {
    let obj = {mayor: numeros[0], menor: numeros[0]};
    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] > obj.mayor) {
            obj.mayor = numeros[i];
        }
        if(numeros[i] < obj.menor) {
            obj.menor = numeros[i];
        }
    }
    return obj;
}

let obj = miFuncion([3,1,5,4,2]);
console.log(obj);