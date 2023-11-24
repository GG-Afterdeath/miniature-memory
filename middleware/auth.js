const jwt = require('jsonwebtoken')
const usersModel = require('../models/usersModel')
// Middleware para proteger rutas de usuarios no logeados

/*
Middle ware para proteger de usuarios sin rol específico
*/
exports.protect = async(req, resp, next) => {
    let token
    /*Verificar si existe el hrader de authorization en la API*/
    if(req.headers.authorization && 
        req.headers.authorization.
        startsWith('Bearer')){
            token = req.
            headers.
            authorization.split(' ')[1]
    }
    if(!token){
        return resp.status(401).json({
            success: false,
            msg: "Invalid token"
        })
    }else{
        const decoded = jwt.decode(token, 
            process.env.JWT_SECRET_KEY)
        //console.log(decoded)
        // Añadir al request es "User"
        req.user = await usersModel.findById(decoded.id)
        // Redirigir a la ruta de crear bootcamps
        next()
    }
}
//
exports.authorize = async(req, resp, next) => {
    
}