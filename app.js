
const prompt = require('prompt-sync')({ sigint: true });

repete()
function repete() {

    const nome = prompt("Digite o seu nome :")
    if (isNaN(nome) && nome != '') {

        console.log("Acesso concedido" + nome)
        calculadora()
    }
    else {
        console.log("Por favor, digite o seu nome novamente")
        repete()
    }
}

function calculadora() {
    var calculos = []
    let resultado1
    let resultado2
    let resultado3
    let resultado4

    const numero1 = prompt("digite o número1: ")
    const numero2 = prompt("Digite o número2: ")
    const operacao = prompt("escolha uma operação: ")

    switch (operacao) {
        case "+":
            resultado1 = Number(numero1) + Number(numero2)
            calculos.push(resultado1)
            console.log(calculos)
            calculadora()
            return calculos
            break;
        case "-":
            resultado2 = Number(numero1) - Number(numero2)
            calculos.push(resultado2)
            console.log(calculos)
            calculadora()
            return calculos


            break;
        case "/":
            resultado3 = Number(numero1) / Number(numero2)
            if (numero1 == 0 || numero2 == 0) {
                console.log("zero não funciona")
                
            }
            calculos.push( resultado3)
            console.log(calculos)
            calculadora()
            return calculos

            break;
        case "*":
            resultado4 = Number(numero1) * Number(numero2)
            calculos.push(resultado4)
            console.log(calculos)
            calculadora()
            return resultado4
            break;
        case "%":
            resultado5 = (Number(numero1) * Number(numero2)) / 100
            calculos.push(resultado5)
            console.log(calculos)
            calculadora()
            return resultado5
            break;

        default:
            console.log("Digite uma operação válida")
            break;

    }


    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        console.log("Por favor, digite números")
        calculadora()

    }
}







