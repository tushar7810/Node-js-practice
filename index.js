const express = require('express')
require('dotenv').config()
const app = express();
const port = 5000;

app.get('/', (req,res) => {
    res.send('Hello , Informer Tushar')
})

app.get('/twitter', (req,res) => {
    res.send('sldjg-xbskjdbsk')
})

app.get('/login' , (req,res) =>{
    res.send('<h1> Log in to Informer Tushar </h1>')
})
app.get('/informer-tushar' , (req,res) =>{
    res.send('<h2> log - IN </h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})