function calcular() {

    var primeiroValor = parseFloat(document.querySelector("#primeiro-valor").value);
    var operador = document.querySelector("#operador").value;
    var segundoValor = parseFloat(document.querySelector("#segundo-valor").value);

    var resultado = "";

    /* OPÇÃO UM DE FAZER: 
    
    *if(operador == "+") {
         resultado = primeiroValor + segundoValor;
    } else if(operador == "-") {
        resultado = primeiroValor - segundoValor;
    } else if(operador == "x") {
        resultado = primeiroValor * segundoValor;
    } else if (operador == "/") {
        resultado = primeiroValor / segundoValor;
    }
    
    OU OPÇÃO 2 */

    switch (operador) {
        case "+":
            resultado = primeiroValor + segundoValor
            break;
        case "-":
            resultado = primeiroValor - segundoValor
            break;
        case "x":
            resultado = primeiroValor * segundoValor
            break;
        case "/":
            resultado = primeiroValor / segundoValor
            break;

        default:
            break;
    }

    document.querySelector("#mostra-numero").innerHTML = "<b>" + primeiroValor + " " +
        operador + " " +
        segundoValor + " = " +
        resultado + "</br>";

}

function limpar() {

    document.querySelector("#primeiro-valor").value = "";
    document.querySelector("#segundo-valor").value = "";
    document.querySelector("#mostra-numero").innerHTML = "";

}







