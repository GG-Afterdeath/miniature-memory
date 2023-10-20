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

app.listen( process.env.PUERTO, () => {
    console.log(`Servidor ejecutándose en el puerto ${process.env.PUERTO}`.bgBlack.cyan.bold)
})