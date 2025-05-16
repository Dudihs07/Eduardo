let inputLargura = document.querySelector("#largura");
let inputComprimento = document.querySelector("#comprimento");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularArea() {
    let largura = Number(inputLargura.value);
    let comprimento = Number(inputComprimento.value);

    let area = largura * comprimento;

    resultado.textContent = "Área do terreno: " + area.toFixed(2) + " m²";
}

btCalcular.onclick = calcularArea;