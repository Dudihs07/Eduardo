let inputNome = document.querySelector("#nome");
let inputIdade = document.querySelector("#idade");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDiasDeVida() {
    let nome = inputNome.value.trim();
    let idade = Number(inputIdade.value);

    let diasDeVida = idade * 365;

    resultado.textContent = `${nome.toUpperCase()}, VOCÊ JÁ VIVEU ${diasDeVida} DIAS`;
}

btCalcular.onclick = calcularDiasDeVida;