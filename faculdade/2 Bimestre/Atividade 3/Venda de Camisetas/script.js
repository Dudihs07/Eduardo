let inputP = document.querySelector("#qtdPequena");
let inputM = document.querySelector("#qtdMedia");
let inputG = document.querySelector("#qtdGrande");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularTotal() {
    let qtdP = Number(inputP.value);
    let qtdM = Number(inputM.value);
    let qtdG = Number(inputG.value);

    let total = (qtdP * 10) + (qtdM * 12) + (qtdG * 15);

    resultado.textContent = `Valor total arrecadado: R$ ${total.toFixed(2)}`;
}

btCalcular.onclick = calcularTotal;