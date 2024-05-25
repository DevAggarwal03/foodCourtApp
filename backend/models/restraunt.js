const mongoose = require('mongoose')


const restrauntSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    id: {
        type: Number,
        require: true,
    },
    discription: {
        type: String,
        maxLenght: 150
    },
    isAvailabel: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now()
    },
    upadatedAt: {
        type: Date,
        require: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Restraunt', restrauntSchema)