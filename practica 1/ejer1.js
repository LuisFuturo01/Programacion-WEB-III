//1. Crear una funcion que cuente cuantas veces aparece cada vocal en un texto y devuelva el resultado en un objeto
//let obj = miFuncion("euforia")
//console.log(obj) // {a: 2, e: 1, i: 1, o: 1, u: 1}
const miFuncion = (texto) => {
    let obj = {a: 0, e: 0, i: 0, o: 0, u: 0};
    for (let i = 0; i < texto.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(texto[i])) {
            obj[texto[i]] += 1;
        }
    }
    return obj;
}

let obj = miFuncion("euforia");
console.log(obj);
