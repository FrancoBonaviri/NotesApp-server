const { Schema, model } = require('mongoose');



const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true 
});

module.exports = model('Note', noteSchema );

