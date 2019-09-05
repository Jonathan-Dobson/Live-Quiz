const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8888

mongoose.connect('mongodb://localhost:27017/quiz',{useNewUrlParser: true})
    .then(()=>console.log('connected to mongoose quiz'))
    .catch(err=>console.log('error',err))

app.use('/',express.json())
app.use('/questions',require('./routes/questionRoute'))


app.listen(PORT,()=>{console.log('listening')})

