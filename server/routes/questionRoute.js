const Question = require('../models/Question')
const express = require('express')
const questionRouter = express.Router()

questionRouter.route('/')
    .get((req,res)=>{
        const { category } = req.query
        if(category){
            Question.find({ category: category }, (err,question)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(question) 
            })
        }else{
            Question.find((err, question) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send( question )
            })
        }
    })

    

    .post((req,res)=>{
        const newQuestion = new Question(req.body)
        newQuestion.save(err=>{
            if(err) return res.status(500).send(err)
            return res.status(201).send(newQuestion) 
        })
    })
questionRouter.route('/:id')
    .put((req,res)=>{
        Question.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, question) => {
                if (err) return res.status(500).send(err);
                return res.send(question);
            }
        )
    })
    .delete((req,res)=>{
        Question.findByIdAndRemove(req.params.id, (err, person) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "successfully deleted",
                id: person._id
            };
            return res.status(200).send(response);
        });

    })


module.exports = questionRouter