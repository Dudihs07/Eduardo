let inputPeso = document.querySelector("#pesoPrato");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularValor() {
    let peso = Number(inputPeso.value);
    let precoPorQuilo = 12.00;

    let valor = peso * precoPorQuilo;

    resultado.textContent = `Valor a pagar: R$ ${valor.toFixed(2)}`;
}

btCalcular.onclick = calcularValor;