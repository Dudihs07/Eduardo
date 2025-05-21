let inputDia = document.querySelector("#dia");
let inputMes = document.querySelector("#mes");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDias() {
    let dia = Number(inputDia.value);
    let mes = Number(inputMes.value);

    if (dia >= 1 && dia <= 30 && mes >= 1 && mes <= 12) {
        let diasTotais = (mes - 1) * 30 + dia;
        resultado.textContent = `Já se passaram ${diasTotais} dias desde o início do ano.`;
    } else {
        resultado.textContent = "Por favor, informe um dia (1–30) e mês (1–12) válidos.";
    }
}

btCalcular.onclick = calcularDias;