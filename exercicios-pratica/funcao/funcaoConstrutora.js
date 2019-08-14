function Carro(VelocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= VelocidadeMaxima) {
            velocidadeAtual += delta
        } else{
            velocidadeAtual = VelocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
