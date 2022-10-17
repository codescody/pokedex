const express = require('express')
const app = express()
const methodOverride = require('method-override')
const pokemon = require('./models/pokemon.js')

app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemons: pokemon,
    })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemons: pokemon[req.params.id],
    })
})

app.listen(3000)