const prompt = require('prompt-sync')({ sigint: true });

function menu() {
const numero1 = prompt("digite o número1: ")
const numero2 = prompt("Digite o número2 :")
const operacao = prompt("escolha uma operação")
    
}


let calculos = []
   
    

switch (operacao) {
    case "+":
       resultado1 = Number(numero1) + Number(numero2)
       calculos.push(resultado1)
       console.log(resultado1)
       console.log(calculos)
       menu()
         return resultado1
        break;
    case "-":
        resultado2 = Number(numero1) - Number(numero2)
        calculos.push(resultado2)
        console.log(resultado2)
         return resultado2

        break;
    case "/":
        resultado2 = Number(numero1) / Number(numero2)
        calculos.push(resultado3)
        console.log(resultado3)
         return resultado3

        break;
    case "*":
        resultado3 = Number(numero1) * Number(numero2)
        calculos.push(resultado4)
        console.log(resultado4)
         return resultado4
        break;
        case "%":
            resultado4 = (Number(numero1) * Number(numero2)) / 100
            calculos.push(resultado5)
            console.log(resultado5)
            return resultado5
   
           break;

    default:
        break;
}

if (typeof numero1 !== 'number' || typeof numero2 !== 'number' ) {
    console.log("Por favor, digite números")

}
else{
    console.log("operação concluída")
   
}

