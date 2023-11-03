const mongoose = require('mongoose')

const conectarDB = async() => { 
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB Conectado".bgBlack.green)
}

module.exports = conectarDB