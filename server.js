const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

// Vincular al archivo .env
dotenv.config(
    { path: './config/.env'}
)

// Construir el objeto de la aplicación

app = express()

// Rutas de bootcamps GET
// Endpoint
// Traer todos los bootcamps
app.get('/bootcamps', (req, resp) => {
    resp.json({
        success: true,
        msg: "Aquí se mostrarán todos los bootcamps"
    })
} )

// Traer bootcamp por ID

app.get('/bootcamps/:id', (req, resp) => {
    resp.json({
        success: true,
        msg: `Aquí se mostrará un bootcamp cuyo ID sea ${req.params.id}`
    })
} )
// POST
// Crear un bootcamp
app.post('/bootcamps', (req, resp) => {
    resp.json({
        success: true,
        msg: "Aquí se creará un bootcamp"
    })
} )
//juuj
// Traer bootcamp por ID

app.put('/bootcamps/:id', (req, resp) => {
    resp.json({
        success: true,
        msg: `Aquí se editará un bootcamp cuyo ID sea ${req.params.id}`
    })
} )

// Borrar bootcamp por ID

app.delete('/bootcamps/:id', (req, resp) => {
    resp.json({
        success: true,
        msg: `Aquí se borrará el bootcamp ${req.params.id}` 
    })
} )

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

//Crear review
app.post('/reviews', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se creará una review`
    })
})

// Editar review
app.put('/reviews/:id', (req, resp) => {
    resp.json({
        succes: true,
        msg: `Acá se editará la review del ID ${req.params.id}`
    })
})

// Borrar review
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