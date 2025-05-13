function calcularIngredientes() {
    const pessoas = parseInt(document.getElementById("pessoas").value);
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(pessoas) || pessoas < 1) {
      resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira um número válido de pessoas.</p>";
      return;
    }
  
    const ovos = pessoas * 2;
    const queijo = pessoas * 50;
  
    resultadoDiv.innerHTML = `
      <h2>Ingredientes Necessários:</h2>
      <ul>
        <li>${ovos} ovos</li>
        <li>${queijo} gramas de queijo</li>
      </ul>
    `;
  }