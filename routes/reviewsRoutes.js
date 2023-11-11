const express = require('express')
const ReviewModel = require('../models/reviewModel')
const reviewModel = require('../models/reviewModel')
const mongoose = require('mongoose')

// Ruteador
const router = express.Router()

// Traer todas las reseñas
router.get('/', async (req, resp) => {
    // Utilizar el modelo para seleccionar todos lo bootcamps registrados en la DB

    try {
        const reviews = 
            await ReviewModel.find()
        if(reviews.length > 0){
            resp.
            status(200).
            json({
            success: true,
            data: reviews
        })
        }else{
            resp.
            status(400).
            json({
                success: false,
                message: 'No se encontró ninguna reseña'
            })
        }
           
    } catch (error) {
        resp.status(400).json({
            success:false,
            message: error,message
        })
    }
    
} )

// Traer una reseña
router.get('/:id', async (req, resp) => {
    //1. Extraer el ID del bootcamp del parámetro en la URL
    //2. Guardarlo en una variable
    try {
        reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const review =
                    await reviewModel.findById(reviewId)
                    if(review){
                            resp.
                        status(200).
                        json({
                        success: true,
                        data: review
                    })
                    }else{
                        resp.
                        status(400).
                        json({
                            success: false,
                            message: `No existe la review identificada con: ${reviewId}`
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

//Crear reseña
router.post('/', async (req, resp) => {
    
    try {
        const newReview = 
        await ReviewModel.create(req.body)

        resp.status(201).json({
            success: true,
            data: newReview
        }) 


    } catch (error) {
        resp.status(400).json({
            success:false,
            message: error.message
        })
    }
    
} )

// Editar reseña
router.put('/:id', async (req, resp) => {

    try {
        const reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const updReview =
            await ReviewModel.
                findByIdAndUpdate(
                    reviewId,
                    req.body, {
                        new: true
                    })
            if(updReview){
                resp.status(200).
                    json({
                    success: true,
                    data: updReview
                })
            }else{
                resp.
                    status(400).
                    json({
                        succes: false,
                        message: `No existe el bootcamp identificado como: ${reviewId}`
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

// Borrar reseña
router.delete('/:id', async (req, resp) => {
    try {
        const reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            resp
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const dltReview =
            await ReviewModel.
                findByIdAndDelete(
                    reviewId
                )
        
        resp.json({
            success: true,
            data: dltReview 
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