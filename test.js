const express = require('express');
require('dotenv').config()
const url = process.env.DB_URL;
const mongus = require('mongoose');
const schema = require('./schema/schema.js');

const app = express();
const port = 6969;

mongus.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) console.log(err)
    if (!err) console.log("Successfully connected to MongoDB!");
});

app.use(express.json());

app.get('/', async(req, res) => {
    const doc = await schema.find();
    res.json(doc);
});
app.post('/post', async (req, res) => {
    const document = new schema(
        { 
            FirstName: req.body.Username,
            LastName: req.body.Password ,
            Gender: req.body.Gender,
            City: req.body.Email
        });
        document.save().then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({
                message: err
        })
    });
    console.log("Successfully inserted the document!");
});

app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`));
