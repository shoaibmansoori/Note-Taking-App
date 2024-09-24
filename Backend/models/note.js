const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    content: {
        type: String,
        required: true,
        maxlength: 500
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
