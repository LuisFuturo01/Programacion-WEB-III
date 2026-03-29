//16. Proporcione un ejemplo para migrar una funcion con promeesas a async/await

// Función que devuelve una Promesa
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;

            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener datos");
            }
        }, 1000);
    });
}


// USANDO PROMESAS
function usandoPromesas() {
    obtenerDatos()
        .then(resultado => {
            console.log("Promesas:", resultado);
        })
        .catch(error => {
            console.log("Promesas Error:", error);
        });
}


// USANDO ASYNC/AWAIT
async function usandoAsyncAwait() {
    try {
        const resultado = await obtenerDatos();
        console.log("Async/Await:", resultado);
    } catch (error) {
        console.log("Async/Await Error:", error);
    }
}


// Ejecutar ambos
usandoPromesas();

setTimeout(() => {
    usandoAsyncAwait();
}, 1000);