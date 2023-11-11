const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')

// Dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')
const courseRoutes = require('./routes/coursesRoutes')
const reviewRoutes = require('./routes/reviewsRoutes')

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

app.use('/api/v1/devcamp/course',
        courseRoutes)

app.use('/api/v1/devcamp/review',
        reviewRoutes)|


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