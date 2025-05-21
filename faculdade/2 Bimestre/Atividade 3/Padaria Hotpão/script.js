let inputQtdPaes = document.querySelector("#qtdPaes");
let inputQtdBroas = document.querySelector("#qtdBroas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularArrecadacao() {
    let paes = Number(inputQtdPaes.value);
    let broas = Number(inputQtdBroas.value);

    let total = (paes * 0.12) + (broas * 1.50);
    let poupanca = total * 0.10;

    resultado.textContent = 
        "Total arrecadado: R$ " + total.toFixed(2) + 
        " | Valor para poupança: R$ " + poupanca.toFixed(2);
}

btCalcular.onclick = calcularArrecadacao;