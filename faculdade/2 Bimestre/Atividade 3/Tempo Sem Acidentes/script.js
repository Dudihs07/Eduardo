let inputDias = document.querySelector("#diasInput");
let btConverter = document.querySelector("#btConverter");
let resultado = document.querySelector("#resultado");

function converterDias() {
    let totalDias = Number(inputDias.value);

    if (totalDias < 0 || isNaN(totalDias)) {
        resultado.textContent = "Informe um número válido de dias (0 ou mais).";
        return;
    }

    let anos = Math.floor(totalDias / 360);
    let restoDias = totalDias % 360;

    let meses = Math.floor(restoDias / 30);
    let dias = restoDias % 30;

    resultado.textContent = `Tempo sem acidentes: ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
}

btConverter.onclick = converterDias;