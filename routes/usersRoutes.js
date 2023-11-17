const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('../models/usersModel')

// Ruteador
const router = express.Router()

// Ruta para registrar usuario
router.post('/register', async(req, resp) => {
    // Registrar usuario
    try {
        const user = 
        await UserModel.create(req.body)

        resp.status(201).json({
            succes: true,
            data: user
    })
    } catch (error) {
        resp.status(400).json({
            success: false,
            message: error.message
        })
    }

    
})

// Ruta para iniciar sesión
router.post('/login', (req, resp) => {
    resp.send('login')
})

module.exports = router