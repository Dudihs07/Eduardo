const inputNum = document.querySelector("#numInput");
const btnSeparar = document.querySelector("#btSeparar");
const resultado = document.querySelector("#resultado");

function separarNumero() {
    let num = inputNum.value.trim();

    if (!num || isNaN(num) || num < 0 || num > 999) {
        resultado.textContent = "Por favor, informe um número inteiro entre 0 e 999.";
        return;
    }

    // Convertendo para número e garantindo string com 3 dígitos (com zeros à esquerda)
    num = Number(num);
    let strNum = num.toString().padStart(3, '0');

    let centena = strNum[0];
    let dezena = strNum[1];
    let unidade = strNum[2];

    resultado.textContent = `CENTENA = ${centena}  DEZENA = ${dezena}  UNIDADE = ${unidade}`;
}

btnSeparar.onclick = separarNumero;