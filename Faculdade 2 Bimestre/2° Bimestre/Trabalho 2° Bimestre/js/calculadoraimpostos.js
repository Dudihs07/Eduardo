function calcularImposto() {
  const ano = parseInt(document.getElementById("ano").value);
  const valor = parseFloat(document.getElementById("valor").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(ano) || isNaN(valor) || valor < 0) {
    resultado.textContent = "Por favor, insira um ano e valor válidos.";
    return;
  }

  let taxa = ano < 1990 ? 0.01 : 0.015;
  let imposto = valor * taxa;

  resultado.textContent = `Imposto a ser pago: R$ ${imposto.toFixed(2)}`;
} 
