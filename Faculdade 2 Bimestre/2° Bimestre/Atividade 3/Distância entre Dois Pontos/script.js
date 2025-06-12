let inputX1 = document.querySelector("#x1");
let inputY1 = document.querySelector("#y1");
let inputX2 = document.querySelector("#x2");
let inputY2 = document.querySelector("#y2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDistancia() {
    let x1 = Number(inputX1.value);
    let y1 = Number(inputY1.value);
    let x2 = Number(inputX2.value);
    let y2 = Number(inputY2.value);

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    resultado.textContent = `A distância entre os pontos é: ${distancia.toFixed(2)}`;
}

btCalcular.onclick = calcularDistancia;