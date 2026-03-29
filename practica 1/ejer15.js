//15. Proporcione un ejemplo para convertir un callback en una promesa

function callbackAPromesa(callback) {
    return new Promise((resolve, reject) => {
        callback((resultado) => {
            if (resultado) {
                resolve(resultado);
            } else {
                reject(resultado);
            }
        });
    });
}

// Ejemplo de uso
const func = (cb) => {
    setTimeout(() => {
        cb("Callback cumplido");
    }, 1000);
};

callbackAPromesa(func).then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
}); 
