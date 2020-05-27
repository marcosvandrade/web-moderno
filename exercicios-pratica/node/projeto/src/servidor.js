const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bandoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res) => {
    res.send(bandoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bandoDeDados.getProduto(req.params.id)) // Converter para JSON
})

app.post('/produtos', (req, res, next) => {
    const produto = bandoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bandoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
}) 

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})