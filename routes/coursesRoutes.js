const express = require('express')
const CourseModel = require('../models/courseModel')
const courseModel = require('../models/courseModel')
const mongoose = require('mongoose')

// Ruteador
const router = express.Router()

// Traer todos los cursos
router.get('/', async (req, resp) => {
    // Utilizar el modelo para seleccionar todos lo bootcamps registrados en la DB

    try {
        const courses = 
            await CourseModel.find()
        if(courses.length > 0){
            resp.
            status(200).
            json({
            success: true,
            data: courses
        })
        }else{
            resp.
            status(400).
            json({
                success: false,
                message: 'No se encontró ningún curso'
            })
        }
           
    } catch (error) {
        resp.status(400).json({
            success:false,
            message: error,message
        })
    }
    
} )


router.get('/:id', async (req, resp) => {
    //1. Extraer el ID del bootcamp del parámetro en la URL
    //2. Guardarlo en una variable
    try {
        const courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const course =
                    await courseModel.findById(courseId)
                    if(course){
                            resp.
                        status(200).
                        json({
                        success: true,
                        data: course
                    })
                    }else{
                        resp.
                        status(400).
                        json({
                            success: false,
                            message: `No existe el Curso identificado como: ${courseId}`
                        })
                    }
            }
    } catch (error) {
        resp.status(400)
                        .json({
                            succes:false,
                            message:error.message
                        })
    }
    
} )

// Crear un bootcamp
router.post('/', async (req, resp) => {
    //El nuevo bootcamp irá a través del body de la request
    try {
        const newCourse = 
        await CourseModel.create(req.body)

        resp.status(201).json({
            success: true,
            data: newCourse
        }) 


    } catch (error) {
        resp.status(400).json({
            success:false,
            message: error.message
        })
    }
    
} )

// Editar bootcamp por ID
router.put('/:id', async (req, resp) => {

    try {
        const courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const updCourse =
            await CourseModel.
                findByIdAndUpdate(
                    courseId,
                    req.body, {
                        new: true
                    })
            if(updCourse){
                resp.status(200).
                    json({
                    success: true,
                    data: updCourse
                })
            }else{
                resp.
                    status(400).
                    json({
                        succes: false,
                        message: `No existe el bootcamp identificado como: ${courseId}`
                    })
            }
       }
    } catch (error) {
        resp.status(400).json({
            success:false,
            message: error.message
        })
    }
} )

// Borrar bootcamp por ID
router.delete('/:id', async (req, resp) => {
    try {
        const courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const dltCourse =
            await CourseModel.
                findByIdAndDelete(
                    courseId
                )
        
        resp.json({
            success: true,
            data: dltCourse 
        })
       }
    } catch (error) {
        resp.status(400).json({
            success:false,
            message: error.message
        })   
    }
} )

module.exports = router