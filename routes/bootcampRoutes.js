const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')

// Definir ruteador
const router = express.Router()

// Traer todos los bootcamps
router.get('/', async (req, resp) => {
    // Utilizar el modelo para seleccionar todos lo bootcamps registrados en la DB
    const bootcamps = 
        await BootcampModel.find()

    resp.json({
        success: true,
        data: bootcamps
    })
} )

// Traer bootcamp por ID
router.get('/:id', async (req, resp) => {
    //1. Extraer el ID del bootcamp del parámetro en la URL
    //2. Guardarlo en una variable
    bootcampId = req.params.id
    const bootcamp =
        await bootcampModel.findById(bootcampId)
    
    resp.json({
        success: true,
        data: bootcamp
    })
} )

// Crear un bootcamp
router.post('/', async (req, resp) => {
    //El nuevo bootcamp irá a través del body de la request
    const newBootcamp = 
        await BootcampModel.create(req.body)

    resp.json({
        success: true,
        data: newBootcamp
    })
} )

// Editar bootcamp por ID
router.put('/:id', async (req, resp) => {
    const bootcampId = req.params.id
    const updBootcamp =
        await BootcampModel.
        findByIdAndUpdate(
            bootcampId,
            req.body, {
                new: true
            })
    
    resp.json({
        success: true,
        data: updBootcamp
    })
} )

// Borrar bootcamp por ID
router.delete('/:id', async (req, resp) => {
    const bootcampId = req.params.id
    const dltBootcamp =
        await BootcampModel.
        findByIdAndDelete(
            bootcampId
        )
    
    resp.json({
        success: true,
        data: dltBootcamp 
    })
} )

module.exports = router