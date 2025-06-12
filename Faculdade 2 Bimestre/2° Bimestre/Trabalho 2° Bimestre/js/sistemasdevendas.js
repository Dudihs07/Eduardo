function calcularPagamento() {
  const preco = parseFloat(document.getElementById('preco').value);
  const condicao = document.getElementById('condicao').value;
  let total = 0;
  let mensagem = "";

  if (isNaN(preco) || preco <= 0) {
    document.getElementById('resultado').textContent = "Digite um valor válido para o preço.";
    return;
  }

  switch (condicao) {
    case 'a':
      total = preco * 0.90;
      mensagem = `Pagamento à vista em dinheiro/cheque com 10% de desconto. Total: R$ ${total.toFixed(2)}`;
      break;
    case 'b':
      total = preco * 0.85;
      mensagem = `Pagamento à vista no cartão com 15% de desconto. Total: R$ ${total.toFixed(2)}`;
      break;
    case 'c':
      total = preco;
      mensagem = `Pagamento em 2x sem juros. Total: R$ ${total.toFixed(2)} (2x de R$ ${(total/2).toFixed(2)})`;
      break;
    case 'd':
      total = preco * 1.10;
      mensagem = `Pagamento em 2x com 10% de juros. Total: R$ ${total.toFixed(2)} (2x de R$ ${(total/2).toFixed(2)})`;
      break;
    default:
      mensagem = "Condição inválida.";
  }

  document.getElementById('resultado').textContent = mensagem;
}