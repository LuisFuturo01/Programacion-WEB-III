//2. Crear una funcion que invierta el orden de las palabras en una frase
//let cad = MiFuncion("abcd")
//console.log(cad) // "dcba"

const miFuncion = (texto) => {
    let inv=""
    for(let i=0; i<texto.length; i++) {
        inv = texto[i] + inv;
    }
    return inv;
}

let cad = miFuncion("abcd");
console.log(cad);