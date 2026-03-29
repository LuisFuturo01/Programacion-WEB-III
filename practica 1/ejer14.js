//14. Proporcione un ejemplo para convertir una promesa en un callback

function promesaACallback(promesa, callback) {
    promesa.then(resultado => {
        callback(resultado);
    }).catch(error => {
        callback(error);
    });
}

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true){
            resolve("Promesa cumplida");
        }else{
            reject("Promesa rechazada");
        }
    }, 1000);
});

promesaACallback(promesa, (resultado) => {
    if (resultado) {
        console.log("Resultado:", resultado);
    } else {
        console.log("Error:", resultado);
    }
});
