let inputSalario = document.querySelector("#salarioInput");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularSalario() {
    let salarioInicial = Number(inputSalario.value);

    if (salarioInicial <= 0 || isNaN(salarioInicial)) {
        resultado.textContent = "Informe um salário válido maior que zero.";
        return;
    }

    let aumento = salarioInicial * 0.15;
    let salarioComAumento = salarioInicial + aumento;
    let descontoImposto = salarioComAumento * 0.08;
    let salarioFinal = salarioComAumento - descontoImposto;

    resultado.innerHTML = `
        Salário inicial: R$ ${salarioInicial.toFixed(2)}<br>
        Salário com aumento de 15%: R$ ${salarioComAumento.toFixed(2)}<br>
        Salário final após desconto de 8% de imposto: R$ ${salarioFinal.toFixed(2)}
    `;
}

btCalcular.onclick = calcularSalario;