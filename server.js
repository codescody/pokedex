const express = require('express')
const app = express()
const methodOverride = require('method-override')
const pokemon = require('./models/pokemon.js')

app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));

app.get('/pokemon', (req, res) => {
    res.send('gotta catch em all')
})

app.listen(3000)