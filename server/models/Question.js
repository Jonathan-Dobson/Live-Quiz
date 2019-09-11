const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    category: String,
    question: String,
    answerA: {
        type: String,
        // required: true
    },
    answerB: {
        type: String,
        // required: true
    },
    answerC: String, 
    answerD: String,
    correctAnswers: [String],
    funFact: String,
    editQuestion: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Question',questionSchema)

