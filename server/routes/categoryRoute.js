const Questions = require('../models/Question')
const express = require('express')
const categoryRouter = express.Router()

categoryRouter.route('/')
    .get((req,res)=>{
        Questions.find((err,question)=>{
            if(err) return res.status(500).send(err)
            let categories = question.reduce((a,b)=>a.some(c=>b.category===c) ? a : [...a,b.category],[])
            console.log(categories);
            return res.status(200).send(categories)
        })
    })

categoryRouter.route('/:category')
    .get((req,res)=>{
        Questions.find({category: req.params.category },(err,question)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(question) 
        })
    })

module.exports = categoryRouter