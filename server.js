const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8888
const path = require('path')

mongoose.connect(process.env.MONGOLAB_BRONZE_URI || 'mongodb://localhost:27017/quiz',{useNewUrlParser: true})
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

