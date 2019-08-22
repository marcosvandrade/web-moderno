const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',
]

// retornar um array somente com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = produto2 => produto2.nome

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
const resultado2 = carrinho.map(paraObjeto).map(apenasNome)

console.log(resultado)
console.log(resultado2)
