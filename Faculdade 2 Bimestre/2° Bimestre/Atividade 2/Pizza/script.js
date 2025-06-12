function calcularPedido() {
    const pizza1 = document.getElementById("pizza1").value;
    const pizza2 = document.getElementById("pizza2").value;
    const pizza3 = document.getElementById("pizza3").value;
    const pizza4 = document.getElementById("pizza4").value;
    const refrigerantes = parseInt(document.getElementById("refrigerantes").value);
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(refrigerantes) || refrigerantes < 0) {
      resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira um número válido de refrigerantes.</p>";
      return;
    }
  
    const valorPizza = 12.00;
    const valorRefrigerante = 7.00;
  
    const totalPizzas = 4 * valorPizza;
    const totalRefrigerantes = refrigerantes * valorRefrigerante;
  
    const valorTotal = totalPizzas + totalRefrigerantes;
  
    resultadoDiv.innerHTML = `
      <h2>Resumo do Pedido:</h2>
      <p><strong>Sabores de pizza escolhidos:</strong> ${pizza1}, ${pizza2}, ${pizza3}, ${pizza4}</p>
      <p><strong>Quantidade de refrigerantes:</strong> ${refrigerantes}</p>
      <p><strong>Valor total:</strong> R$ ${valorTotal.toFixed(2)}</p>
    `;
  }