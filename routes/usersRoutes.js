const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('../models/usersModel')

// Ruteador
const router = express.Router()

// Ruta para registrar usuario
router.post('/register', async(req, resp) => {
    // Registrar usuario
    try {
        const user = await UserModel.create(req.body)
        // Crear token
        const token = user.generarJWT()
        resp.status(201).json({
            succes: true,
            data: user,
            token_jwt: token
    })
    } catch (error) {
        resp.status(400).json({
            success: false,
            message: error.message
        })
    }
    
})

// Ruta para iniciar sesión
router.post('/login', async (req, resp) => {
    //1. NO LLEGA EMAIL O PASSWORD
    const {email, password} = req.body;

    if(!email || !password){
        return resp.status(400).json({
            succes: false,
            message: 'Falta el email o el password'
        })
    }else{
        //2. SI LLEGA, PERO EL USUARIO NO EXISTE
        const user = await UserModel.findOne({email}).select("+password")
        if(!user){
            return resp.status(400).json({
                succes: false,
                message: 'El usuario no existe'
            })
        }else{
            //3. LLEGA EMAIL, USUARIO EXISTE, PERO EL PASSWORD 
            //   ESTÁ EQUIVOCADO
            const isMatch = await user.compararPassword(password)
            if(isMatch){
                const token = user.generarJWT()
                // Opciones para crear la cookie
                const options = {
                    expires: new Date(
                                Date.now() + 
                                process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                return resp.
                status(200).
                cookie('token', token, options).
                json({
                    succes: true,
                    msg: 'Bienvenido al sistema',
                    data: user,
                    jwt_token: token
                })
            }else{                                                               
                resp.status(400).json({
                    succes: false,
                    message: 'Credenciales incorrectas'
                })
            }    
        }
    }
})

module.exports = router