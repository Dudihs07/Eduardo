const inputRaio = document.querySelector("#raioInput");
const btnCalcular = document.querySelector("#btCalcular");
const resultado = document.querySelector("#resultado");

function calcularArea() {
    let raio = Number(inputRaio.value);

    if (raio <= 0 || isNaN(raio)) {
        resultado.textContent = "Informe um raio válido maior que zero.";
        return;
    }

    const pi = 3.14;
    let area = pi * raio * raio;

    resultado.textContent = `A área da pizza é: ${area.toFixed(2)} unidades².`;
}

btnCalcular.onclick = calcularArea;