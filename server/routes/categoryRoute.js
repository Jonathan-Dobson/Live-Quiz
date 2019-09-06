const Questions = require('../models/Question')
const express = require('express')
const categoryRouter = express.Router()

categoryRouter.route('/:category')
    .get((req,res)=>{
        console.log(req.params);
        Questions.find({category: req.params.category },(err,question)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(question) 
        })
    })

module.exports = categoryRouter