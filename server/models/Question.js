const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answerA: {
        answer: {
            type: String,
            required: true
        },
        correct: {
            type: Boolean,
            required: false
        }
    },    
    answerB: {
        answer: {
            type: String,
            required: true
        },
        correct: {
            type: Boolean,
            required: false
        }
    },    
    answerC: {
        answer: {
            type: String,
            required: false
        },
        correct: {
            type: Boolean,
            required: false
        }
    },    
    answerD: {
        answer: {
            type: String,
            required: false
        },
        correct: {
            type: Boolean,
            required: false
        }
    },
    funFact: String
})

module.exports = mongoose.model('Question',questionSchema)

