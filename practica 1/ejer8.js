//8. Realizar un codigo para ejecutar una funcion callback despues de 2 segundos
const miFuncion = (callback) => {
    console.log("Esperando 2 segundos...");
    setTimeout(() => {
        callback();
    }, 2000);
}

miFuncion(() => console.log("Hola mundinho"));