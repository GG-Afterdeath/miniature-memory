const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')

// Dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')

// Vincular al archivo .env
dotenv.config(
    { path: './config/.env'}
)

//CONECTAR A LA DB
conectarDB()

// Construir el objeto de la aplicación
const app = express()
app.use(express.json())

// Conectar las rutas al objeto app
app.use('/api/v1/devcamp/bootcamp',
        bootcampRoutes)

// Traer todos los cursos
app.get('/courses', (req, resp) => {
    resp.json({
        success: true,
        msg: "Aquí se mostrarán todos los cursos"
    })
} )

// Traer un solo curso
app.get('/courses/:id', (req, resp) => {
    resp.json({
        success: true,
        msg: `Aquí se mostrará un curso cuyo ID sea ${req.params.id}`
    })
} )

//Crear un solo curso
app.post('/courses', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se creará un curso`
    })
})

// Actualizar curso
app.put('/courses/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se editará el curso ${req.params.id}`
    })
})

// Eliminar curso
app.delete('/courses/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se eliminará el curso ${req.params.id}`
    })
})

// Traer todas las reseñas
app.get('/reviews', (req, resp) => {
    resp.json({
        success: true,
        msg: "Aquí se mostrarán todas las reseñas"
    })
} )

// Traer una reseña
app.get('/reviews/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se mostrará una review del id ${req.params.id}`
    })
})

//Crear reseña
app.post('/reviews', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se creará una review`
    })
})

// Editar reseña
app.put('/reviews/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se editará la review del ID ${req.params.id}`
    })
})

// Borrar reseña
app.delete('/reviews/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se borrará la review del ID ${req.params.id}`
    })
})

//Crear usuario
app.post('/users', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se creará un usuario`
    })
})

// Traer usuario
app.get('/users', (req, resp) => {
    resp.json({
        succes:true,
        msg: `Acá se editará un usuario`
    })
})

// Editar usuario
app.put('/users/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se editará el usuario ${req.params.id}`
    })
})

// Borrar usuario
app.delete('/users/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se borrará el usuario del ID ${req.params.id}`
    })
})

app.listen( process.env.PUERTO, () => {
    console.log(`Servidor ejecutándose en el puerto ${process.env.PUERTO}`.bgBlack.cyan.bold)
})