const Questions = require('../models/Question')
const express = require('express')
const categoryRouter = express.Router()

categoryRouter
    .route('/')
    .get((req, res) => {

        console.log('GET category/');
        Questions.find((err, question) => {
            if (err) 
                return res.status(500).send(err)
            let categories = question.reduce((a, b) => a.some(c => b.category === c)
                ? a
                : [
                    ...a,
                    b.category
                ], [])

            return res
                .status(200)
                .send(categories)
        })

    })

categoryRouter
    .route('/:category')
    .get((req, res) => {
        console.log('GET category/:category/');
        Questions.find({
            category: req.params.category
        }, (err, question) => {
            if (err) 
                return res.status(500).send(err)
            return res
                .status(200)
                .send(question)
        })
    })
    .put((req, res) => {
        console.log('PUT category/:category/');
        Questions.updateMany({
            category: req.params.category
        }, req.body, (err, updateRes) => {
            if (err) 
                return res.sendStatus(500).send(err)
            return res
                .sendStatus(200)
                .send(updateRes.n)
        })

    })
    .delete((req, res) => {
        console.log('DELETE category/:category/',req.params.category);
        Questions.deleteMany({ category: req.params.category}, (err, category) => {
            if(err)return res.status(500).send(err)
            return res.status(200).send(category)
        })
            
        
        // Questions.deleteMany({"category": req.params.category})
        // res.status(200).send()
    })

module.exports = categoryRouter