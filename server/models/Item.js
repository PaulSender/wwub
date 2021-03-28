var mongoose = require('mongoose')

var Schema = mongoose.Schema

// Create Schema

var ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        date: {
            type: Date,
            default: Date.now()
        }
    },
    url: {
        type: String,
        required: true,
        date: {
            type: Date,
            default: Date.now()
        }
    },
    category: {
        type: String,
        required: true,
        date: {
            type: Date,
            default: Date.now()
        }
    },
    rating: {
        type: Number,
        required: true,
        date: {
            type: Date,
            default: Date.now()
        }
    },
    image: {
        data: Buffer,
        contentType: String
    },
    user: {
        type: String, 
        required: true, 
        date: {
            type: Date,
            default: Date.now()
        }
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)