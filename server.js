const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const PORT = 8888

mongoose.connect('mongodb://localhost:27017/quiz',{useNewUrlParser: true})
    .then(()=>console.log('connected to mongoose quiz'))
    .catch(err=>console.log('error',err))

app.use('/',express.json())
app.use('/questions',require('./routes/questionRoute'))
app.use('/category',require('./routes/categoryRoute'))
app.use(express.static(path.join(__dirname, 'client', 'build')))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT,()=>{console.log('listening')})

