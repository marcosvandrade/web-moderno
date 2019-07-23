const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// posicao 0 -> i = 0
// posicao 1 -> i = 1
// posicao 2 -> i = 2
// posicao 3 -> i = 3
// posicao 4 -> i = 4
// posicao 5 -> i = 5
// posicao 6 -> i = 6
// posicao 7 -> i = 7
// posicao 8 -> i = 8
// posicao 9 -> i = 9
// posicao 10 -> estora o array

funcs[2]()
funcs[6]()
funcs[9]()
