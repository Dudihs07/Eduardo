let inputQtdCavalos = document.querySelector("#qtdCavalos");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularFerraduras() {
    let qtd = Number(inputQtdCavalos.value);
    let ferraduras = qtd * 4;
    resultado.textContent = "Serão necessárias " + ferraduras + " ferraduras.";
}

btCalcular.onclick = calcularFerraduras;