const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, //limpia el string
        unique: true
    }
}, {
    timestamps: true
});


module.exports = model('user', userSchema);