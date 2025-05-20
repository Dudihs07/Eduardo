let inputSaldo = document.querySelector("#inputSaldo");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function reajustarSaldo() {
    let saldo = Number(inputSaldo.value);
    let saldoReajustado = saldo * 1.01;
    h3Resultado.textContent = "Saldo com reajuste de 1%: R$ " + saldoReajustado.toFixed(2);
}

btCalcular.onclick = function () {
    reajustarSaldo();
}