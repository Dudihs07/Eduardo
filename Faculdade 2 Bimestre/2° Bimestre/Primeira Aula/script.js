let titulo = document.querySelector("#titulo");
let campoTexto = document.querySelector("#campoTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto() {
    let textoDigitado = campoTexto.value;
    titulo.textContent = textoDigitado;
}

btTrocarTexto.onclick = function() {
    alterarTexto();
}