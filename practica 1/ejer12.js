//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el codigo mas limpio y mantenible

//Callback
function obtenerUsuario(id, callback) {
    setTimeout(() => {
        console.log("Usuario obtenido");
        callback({ id: id, nombre: "Juan" });
    }, 1000);
}

function obtenerPosts(usuario, callback) {
    setTimeout(() => {
        console.log("Posts obtenidos de " + usuario.nombre);
        callback([{ titulo: "Post 1" }, { titulo: "Post 2" }]);
    }, 1000);
}

obtenerUsuario(1, (usuario) => 
    obtenerPosts(usuario, (posts) => console.log(posts))
);


//Async/Await 

function obtenerUsuarioAsync(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id) {
                reject("ID inválido");
            } else {
                console.log("Usuario obtenido");
                resolve({ id: id, nombre: "Juan" });
            }
        }, 1000);
    });
}

function obtenerPostsAsync(usuario) {
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

async function iniciar() {
    try {
        const usuario = await obtenerUsuarioAsync(1);
        const posts = await obtenerPostsAsync(usuario);
        console.log(posts);
    } catch (error) {
        console.error("Error", error);
    }
}

iniciar();