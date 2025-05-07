function calcularTroco() {
  let valorPago = +document.querySelector('#valorPago').value;
  let precoProduto = +document.querySelector('#precoProduto').value;
  let resultado = document.querySelector('#resultado');

  let valoresInvalidos = !(Number.isFinite(valorPago) && Number.isFinite(precoProduto));

  let mensagem = valoresInvalidos
      ? 'Por favor, insira valores válidos.'
      : (valorPago < precoProduto)
          ? `Valor insuficiente. Faltam R$ ${(precoProduto - valorPago).toFixed(2)}.`
          : `Troco a ser dado: R$ ${(valorPago - precoProduto).toFixed(2)}.`;

  resultado.textContent = mensagem;
}