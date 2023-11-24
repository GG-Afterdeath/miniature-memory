const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')
const cookieParser = require('cookie-parser')

// Dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')
const courseRoutes = require('./routes/coursesRoutes')
const reviewRoutes = require('./routes/reviewsRoutes')
const userRoutes = require('./routes/usersRoutes')

// Vincular al archivo .env
dotenv.config(
    { path: './config/.env'}
)

//CONECTAR A LA DB
conectarDB()

// Construir el objeto de la aplicación
const app = express()
app.use(express.json())
app.use(cookieParser())

// Conectar las rutas al objeto app
app.use('/api/v1/devcamp/bootcamp',
        bootcampRoutes)

app.use('/api/v1/devcamp/course',
        courseRoutes)

app.use('/api/v1/devcamp/review',
        reviewRoutes)|
        
app.use('/api/v1/devcamp/auth',
        userRoutes)

// Conexión al puerto
app.listen( process.env.PUERTO, () => {
    console.log(`Servidor ejecutándose en el puerto ${process.env.PUERTO}`.bgBlack.cyan.bold)
})

// Registrar usuario
