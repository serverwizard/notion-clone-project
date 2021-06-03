const express = require('express');
const app = express();
const api = require('./routes/index');

app.use('/api', api);

const router = require('./routes')(app);

const User = require('./models/user');

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://hayeong:<password>@ha0.hnyx8.mongodb.net/<dbname>?retryWrites=true&w=majority', {
//     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log('MongoDB connected...'))
//     .catch(error => console.log(error))
