const mongoose = require('mongoose')

const EntitySchema = mongoose.Schema({
        column : Number,
        columnN : Number,
        x : Number,
        row : Number,
        y : Number,
        color : String,
        type : String
})


module.exports = mongoose.model('Entitys', EntitySchema);