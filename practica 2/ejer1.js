
import express from 'express';
import mysql from 'mysql2/promise';


const app = express();
app.use(express.json());

const pool =mysql.createPool({
    host: 'localhost',
    user: 'LuisFuturo01',
    password: 'LuisFuturo01_2025',
    database: 'bd_web_prac2'
})

//1. Crea un endpoint POST /categorias que permita registrar una nueva categoria enviando nombre y descripcion en el body de la peticion
app.post('/categorias', async (req,res)=>{
    const { nombre, descripcion } = req.body;
    try {
        const [ rows ] = await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]);
        res.status(201).json({ 
            data: rows,
            mensaje: 'Categoria registrada exitosamente' 
        });
    } catch (e) {
        res.status(500).json({ mensaje: 'Error al registrar la categoria' });
    }
});

//2.Crea un endpoint GET /categorias que devuelva todas las categorias registradas en la base de datos
app.get('/categorias', async (req, res)=>{
    try {
        const [ rows ] = await pool.query('SELECT * FROM categorias');
        res.status(200).json({ 
            data: rows,
            mensaje: 'Categorias obtenidas exitosamente' 
        });
    } catch (e) {
        res.status(500).json({ mensaje: 'Error al obtener las categorias' });
    }
})

//3.Crea un endpoint GET /categorias/:id que devuelva la categoria con el ID especificado y ademas, incluya todos los productos que pertenecen a esa categoria
app.get('/categorias/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const [ rows_categ ] = await pool.query(`
            SELECT id, nombre
            FROM categorias
            WHERE id = ?
            `, [id]);
        const [ rows_prod ] = await pool.query(`
            SELECT nombre, precio
            FROM productos
            WHERE categoriaID = ?
        `, [id]);

        res.status(200).json({ 
            data: {
                categoria: rows_categ,
                productos: rows_prod
            },
            mensaje: 'Categoria ' 
        });
    } catch (e) {
        res.status(500).json({ mensaje: 'Error al obtener la categoria y sus productos' });
    }
    
})

//4. Crea un endpoint PATCH /categorias/:id que permita actualizar todos los datos de la categoria con el ID especificado
app.patch('/categorias/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const { nombre, descripcion } = req.body;
        const [ rows ] = await pool.query(`
            UPDATE categorias
            SET nombre = ?, descripcion = ?, updatedAt = CURRENT_TIMESTAMP
            WHERE id = ?
        `, [nombre, descripcion, id]);
        res.status(200).json({ 
            data: rows,
            mensaje: 'Categoria actualizada exitosamente' 
        });
    } catch (e) {
        res.status(500).json({ mensaje: 'Error al actualizar la categoria' });
    }
})

//5. Crea un endpoint DELETE /categorias/:id que elimine la categoria indicada y, al mismo tiempo, elimine automñaticamente todos los productos que pertenecen a esa categoria
app.delete('/categorias/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const [ rows_prod ] = await pool.query(`
            DELETE FROM productos
            WHERE categoriaID = ?;
        `, [id]);
        const [ rows_categ ] = await pool.query(`
            DELETE FROM categorias
            WHERE id = ?;
        `, [id]);
        res.status(200).json({ 
            data: [{
                categoria: rows_categ,
                productos: rows_prod
            }],
            mensaje: 'Categoria eliminada exitosamente' 
        });
    } catch (e) {
        res.status(500).json({ mensaje: 'Error al eliminar la categoria' });
    }
})

const port=3001;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});




