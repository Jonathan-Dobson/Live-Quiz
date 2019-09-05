const Question = require('../models/Question')
const express = require('express')
const questionRouter = express.Router()

questionRouter.route('/')
    .get((req,res)=>{
        Question.find((err,question)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(question) 
        })
    })
    .post((req,res)=>{
        const newQuestion = new Question(req.body)
        newQuestion.save(err=>{
            if(err) return res.status(500).send(err)
            return res.status(201).send(newQuestion) 
        })
    })

module.exports = questionRouter