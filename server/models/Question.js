const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    category: String,
    question: String,
    answerA: {
        answer: String,
        correct: Boolean
    },    
    answerB: {
        answer: String,
        correct: Boolean
    }, 
    answerC: {
        answer: String,
        correct: Boolean
    }, 
    answerD: {
        answer: String,
        correct: Boolean
    }, 
    funFact: String
})

module.exports = mongoose.model('Question',questionSchema)

