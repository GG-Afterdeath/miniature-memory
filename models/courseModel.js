const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[
            true,
            "El curso necesita un título"
        ],
        maxlength:[
            30, "El máximo de caracteres permitidos es 30"
        ],
        minlength:[
            10, "El título mínimo debe tener 10 caractéres"
        ]
    },
    description:{
        type: String,
        required:[
            true, "Es necesario poner una descripción para el curso"
        ],
        minlength:[
            10, "El mínimo de caracteres para la descripción es 10"
        ]
    },
    weeks:{
        type: Number,
        required:[
            true, "Indíque la duración del curso (Semanas)."
        ],
        max:[
            9, "La duración no puede exceder las 9 semanas"
        ]
    },
    enroll_cost:{
        type: Number,
        required:[
            true, "Indíque el costo del Curso"
        ]
    },
    minimum_skill:{
        type:[String],
        required:[
            true, "Indíque la habilidad mínima"
        ],
        enum:[
            "Beginner",
            "Intermediate",
            "Advanced",
            "Expert"
        ]
    }
})

module.exports = mongoose.model("Course", CourseSchema)