const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')
const mongoose = require('mongoose')

// Definir ruteador
const router = express.Router()

// Traer todos los bootcamps
router.get('/', async (req, resp) => {
    // Utilizar el modelo para seleccionar todos lo bootcamps registrados en la DB

    try {
        const bootcamps = 
            await BootcampModel.find()
        if(bootcamps.length > 0){
            resp.
            status(200).
            json({
            success: true,
            data: bootcamps
        })
        }else{
            resp.
            status(400).
            json({
                success: false,
                message: 'No se encontró ningún bootcamp'
            })
        }
           
    } catch (error) {
        resp.status(400).json({
            success:false,
            message: error,message
        })
    }
    
} )

// Traer bootcamp por ID
router.get('/:id', async (req, resp) => {
    //1. Extraer el ID del bootcamp del parámetro en la URL
    //2. Guardarlo en una variable
    try {
        const bootcampId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const bootcamp =
                    await bootcampModel.findById(bootcampId)
                    if(bootcamp){
                            resp.
                        status(200).
                        json({
                        success: true,
                        data: bootcamp
                    })
                    }else{
                        resp.
                        status(400).
                        json({
                            success: false,
                            message: `No existe el bootcamp identificado como: ${bootcampId}`
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
        const newBootcamp = 
        await BootcampModel.create(req.body)

        resp.status(201).json({
            success: true,
            data: newBootcamp
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
        const bootcampId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const updBootcamp =
            await BootcampModel.
                findByIdAndUpdate(
                    bootcampId,
                    req.body, {
                        new: true
                    })
            if(updBootcamp){
                resp.status(200).
                    json({
                    success: true,
                    data: updBootcamp
                })
            }else{
                resp.
                    status(400).
                    json({
                        succes: false,
                        message: `No existe el bootcamp identificado como: ${bootcampId}`
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
        const bootcampId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const dltBootcamp =
            await BootcampModel.
                findByIdAndDelete(
                    bootcampId
                )
        
        resp.json({
            success: true,
            data: dltBootcamp 
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