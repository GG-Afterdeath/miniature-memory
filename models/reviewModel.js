const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[
            true, "La review necesita un título"
        ],
        maxlength:[
            20, "El título no puede exceder los 20 caracteres"
        ]
    },
    text:{
        type: String,
        required:[
            true, "Ingrese la reseña"
        ],
        maxlength:[
            50, "La review no puede exceder los 50 caracteres"
        ]
    },
    rating:{
        type: Number,
        required:[
            true, "Coloque la calificación"
        ],
        min:[
            1, "El mínimo puntaje es 1"
        ],
        max:[
            10, "El máximo puntaje es 10"
        ]
    }
})

module.exports = mongoose.model("Review", ReviewSchema)