const inputConta = document.querySelector("#valorConta");
const btnCalcular = document.querySelector("#btCalcular");
const resultado = document.querySelector("#resultado");

function dividirConta() {
    let total = Number(inputConta.value);

    if (total <= 0 || isNaN(total)) {
        resultado.textContent = "Informe um valor válido maior que zero.";
        return;
    }

    // Dividir valor total por 3
    let valorPorPessoa = total / 3;

    // Carlos e André pagam a parte inteira (sem centavos)
    let carlos = Math.floor(valorPorPessoa);
    let andre = Math.floor(valorPorPessoa);

    // Felipe paga o restante
    let felipe = total - (carlos + andre);

    resultado.innerHTML = `
        Carlos deve pagar: R$ ${carlos.toFixed(2)}<br>
        André deve pagar: R$ ${andre.toFixed(2)}<br>
        Felipe deve pagar: R$ ${felipe.toFixed(2)}
    `;
}

btnCalcular.onclick = dividirConta;