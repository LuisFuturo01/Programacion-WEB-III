//11. Proporcione un ejemplo concreto de encadenamiento de promesas

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(0);
    }, 1000);
});

promesa.then(num => {
    console.log("Paso 1:", num);
    return num+10;
}).then(num => {
    console.log("Paso 2:", num);
    return num*10;
}).then(num => {
    console.log("Paso 3:", num);
});