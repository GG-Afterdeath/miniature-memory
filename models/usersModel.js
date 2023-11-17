const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Nombre de usuario requerido"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Es necesario ingresar un e-mail"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            "Email inválido"
        ]
    },
    password: {
        type: String,
        required: [true, "Se requiere un password"],
        maxlenght: [6, "Password muy larga"],
        select: false
    },
    role: {
        type: String,
        enum: ["admin", "user", "publisher"],
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// needle, capa doftware para casos exepcionales
// Antesde que guarde se ejecutará. como si fuera una especie de trigger
userSchema.pre('save', async function(){
    //Generar la sal
    const sal = await bcryptjs.genSalt(15)
    //Encriptar el password utilizando la sal
    this.password = await bcryptjs.hash(this.password, sal)
})

module.exports = mongoose.model('User', userSchema)