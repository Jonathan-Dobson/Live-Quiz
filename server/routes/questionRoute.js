const Questions = require('../models/Question')
const express = require('express')
const questionRouter = express.Router()

questionRouter.route('/')
    .get((req,res)=>{
        console.log(req.body);
        Questions.find((err,question)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(question) 
        })
    })
    .post((req,res)=>{
        const newQuestion = new Questions(req.body)
        newQuestion.save(err=>{
            if(err) return res.status(500).send(err)
            return res.status(201).send(newQuestion) 
        })
    })
questionRouter.route('/:id')
    .put((req,res)=>{
        Questions.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
            (err, question) => {
                if (err) return res.status(500).send(err);
                return res.send(question);
            }
        )
    })
    .delete((req,res)=>{
        Questions.findByIdAndRemove(req.params.id, (err, person) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "successfully deleted",
                id: person._id
            };
            return res.status(200).send(response);
        });

    })


module.exports = questionRouter