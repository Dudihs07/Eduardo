function calcular() {
    const cotacao = parseFloat(document.getElementById("cotacao").value);
    const resultadosDiv = document.getElementById("resultados");
  
    if (isNaN(cotacao) || cotacao <= 0) {
      resultadosDiv.innerHTML = "<p style='color:red;'>Por favor, insira uma cotação válida.</p>";
      return;
    }
  
    const percentuais = [1, 2, 5, 10];
    let html = `<h2>Resultados:</h2><ul>`;
  
    percentuais.forEach(percentual => {
      const valorAumentado = cotacao * (1 + percentual / 100);
      html += `<li>Com aumento de ${percentual}%: R$ ${valorAumentado.toFixed(2)}</li>`;
    });
  
    html += "</ul>";
    resultadosDiv.innerHTML = html;
  }