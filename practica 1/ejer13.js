//13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo e lcodigo mas limpio y matenible 

// Funciones que devuelven Promesas
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id) {
                reject("ID inválido");
            } else {
                console.log("Usuario obtenido");
                resolve({ id, nombre: "Juan" });
            }
        }, 1000);
    });
}

function obtenerPosts(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!usuario) {
                reject("Usuario no válido");
            } else {
                console.log("Posts obtenidos de " + usuario.nombre);
                resolve([{ titulo: "Post 1" }, { titulo: "Post 2" }]);
            }
        }, 1000);
    });
}

// USANDO PROMESAS
function usandoPromesaSimple() {
    obtenerUsuario(1)
        .then(usuario => {
            return obtenerPosts(usuario);
        })
        .then(posts => {
            console.log("Then:", posts);
        })
        .catch(error => {
            console.log("Then Error:", error);
        });
}

// USANDO ASYNC/AWAIT
async function usandoAsyncAwait() {
    try {
        const usuario = await obtenerUsuario(1);
        const posts = await obtenerPosts(usuario);
        console.log("Async/Await:", posts);
    } catch (error) {
        console.error("Async Error", error);
    }
}

usandoPromesaSimple();
usandoAsyncAwait();
