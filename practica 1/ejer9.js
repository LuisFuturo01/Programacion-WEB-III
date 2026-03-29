//9. Crear una promesa que devuelva un mensaje de exito despues de 3 segundos

const miPromesa = new Promise((resolve, reject) => {
    console.log("iniciando promesa...")
    setTimeout(() => {
        resolve("exito");
    }, 3000);
});

miPromesa.then(res => console.log(res));
