const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Joi = require('joi');
const cors= require('cors');
const mongoose = require('mongoose')
require('dotenv/config')


//routes
const postsRoute = require('./routes/posts');
const entitysRoute = require('./routes/entitys');


app.use(cors());
app.use(bodyParser.json())
app.use('/posts', postsRoute);
app.use('/api/entitys', entitysRoute);

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,  useUnifiedTopology: true },()=>console.log("connected"))

app.get('/',(req, res)=>{
    res.send('On home');
    res.end();
})

const port = process.env.PORT || 8080

app.listen(port, ()=>console.log(`Listening on port ${port}...`));
