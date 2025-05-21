let inputPreco = document.querySelector("#precoLitro");
let inputValor = document.querySelector("#valorPago");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularLitros() {
    let preco = Number(inputPreco.value);
    let valor = Number(inputValor.value);

    if (preco > 0) {
        let litros = valor / preco;
        resultado.textContent = `Você abasteceu ${litros.toFixed(2)} litros de gasolina.`;
    } else {
        resultado.textContent = "Informe um preço válido.";
    }
}

btCalcular.onclick = calcularLitros;