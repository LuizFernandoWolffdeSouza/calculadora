const prompt = require('prompt-sync')({ sigint: true });
const {somar} = require(`./somar`)


menu()
function menu() {
    const numero1 = prompt("digite o número1: ")
    const numero2 = prompt("Digite o número2: ")
    console.log(`escolha uma opção
    1. somar
    2. subtrair
    3. dividir
    `)

    const pergunta = prompt("escolha uma opcção :")
    switch (pergunta) {
        case '1':
     calculo = Number(numero1) + Number(numero2)
     console.log(calculo)
            
            break;
    
        default:
            break;
    }
}