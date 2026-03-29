//5. Crear una funcion que determine si una cadena es palindromo (se see igual al derecho y al reves)
//let band = miFuncion("oruro")
//console.log(band) // true
//let band = miFuncion("hola")
//console.log(band) // false

const miFuncion = (texto) => {
    let inv=""
    for(let i=0; i<texto.length; i++) {
        inv = texto[i] + inv;
    }
    return texto == inv;
}

let band = miFuncion("oruro");
console.log(band);
band = miFuncion("hola");
console.log(band);