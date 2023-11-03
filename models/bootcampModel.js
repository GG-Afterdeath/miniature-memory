const mongoose = require('mongoose')

// Definir schema o plantilla. es como un plano
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [
            true,
            "Se requiere nombre para el bootcamp"
        ]
    },
    phone: {
        type: Number,
        required: [
            true,
            "Teléfono requerido"
        ],
        maxlength: [
            10, "El máximo de caracteres permitidos es 10"
        ],
        minlength: [
            7, "No se cumple con el mínimo de caracteres"
        ]
    },
    address: {
        type: String,
        required: [true,
        "Dirección requerida"]
    },
    topics: {
        type: [String ], 
        enum: [
            "Backend",
            "Frontend",
            "DevOps",
            "AI"
        ]
    },
    createdAT: Date
})

module.exports = mongoose.model("Bootcamp", BootcampSchema)