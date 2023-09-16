const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));   //Parses the bodies and extended helps us to choose between querystring library and qs library
app.use(bodyParser.json());    //middleware that only Parses only the json

// Let us mimic the use of Database using an array.
let bloglIST = [];

app.get('/blogs', (req,res) => {
    return res.status(200).json({
        data: bloglIST,
        success: true
    })
})


app.post('/blogs', (req,res) =>
{
    bloglIST.push({
        title: req.body.title, 
        content: req.body.content,
        id: Math.floor(Math.random() * 1000) 
    });
    return res.status(201).json({
        success: true,
    });
})

app.get('/blogs/:id', (req, res) => {
    const result = bloglIST.filter((blog) => blog.id == req.params.id);
    return res.json({
        data:result,
        success:true
    })
})

app.delete('/blogs/:id',(req,res) => {
    const result = bloglIST.filter((blog) => blog.id != req.params.id);
    return res.json({
        data:result,
        success:true
    })
})

app.listen(PORT, () => {
    console.log("Server Started on PORT: ",PORT);
}) 