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

app.put('/pokemon/:id', (req, res) => {
    pokemon[req.params.id] = req.body
    res.redirect('/pokemon')
    console.log(req.body)
})

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {
    })
})

app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', 
    {
        pokemons: pokemon[req.params.id],
        id: req.params.id,
    })
    
})

app.post('/pokemon', (req, res) => {
    let newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed,
    }
    pokemon.push(newPokemon)
    res.redirect('/pokemon')
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemons: pokemon[req.params.id],
    })
})

app.listen(3000)