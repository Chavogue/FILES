const express = require('express');
require('dotenv').config()
const url = process.env.DB_URL;
const mongus = require('mongoose');
const schema = require('./schema/schema.js');


const app = express();
const port = 3000;


mongus.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) console.log(err)
    if (!err) console.log("Connected in MongoDb");
});

app.use(express.json());

app.get('/', async(req, res) => {
    const doc = await schema.find();
    res.json(doc);
});
app.post('/post', async (req, res) => {
    const document = new schema(
        { 
            Username: req.body.Username,
            Password: req.body.Password ,
            Gender : req.body.Gender,
            Email : req.body.Email
        });
        document.save().then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({
                message: err
        })
    });
    console.log("Document succesfully inserted");
});

app.listen(port, () => console.log(`Listening on port : http://localhost:${port}`));
