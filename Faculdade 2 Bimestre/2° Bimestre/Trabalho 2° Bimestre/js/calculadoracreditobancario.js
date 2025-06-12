function calcularCredito() {
  const saldo = parseFloat(document.getElementById('saldo').value);
  let percentual = 0;

  if (saldo >= 201 && saldo <= 400) {
    percentual = 0.20;
  } else if (saldo >= 401 && saldo <= 600) {
    percentual = 0.30;
  } else if (saldo > 600) {
    percentual = 0.40;
  }

  const resultado = document.getElementById('resultado');

  if (saldo <= 200) {
    resultado.textContent = `Saldo médio: R$ ${saldo.toFixed(2)}. Nenhum crédito disponível.`;
  } else {
    const credito = saldo * percentual;
    resultado.textContent = `Saldo médio: R$ ${saldo.toFixed(2)}. Crédito disponível: R$ ${credito.toFixed(2)}.`;
  }
}