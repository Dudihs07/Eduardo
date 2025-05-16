function calcularOperacoes() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const resultadosDiv = document.getElementById("resultados");
  
    // Verifica se ambos os números são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
      resultadosDiv.innerHTML = "<p style='color:red;'>Por favor, insira dois números inteiros válidos.</p>";
      return;
    }
  
    // Realiza as operações
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero2 !== 0 ? numero1 / numero2 : "Não é possível dividir por zero";
  
    // Exibe os resultados
    resultadosDiv.innerHTML = `
      <h2>Resultados:</h2>
      <ul>
        <li>Soma: ${soma}</li>
        <li>Subtração: ${subtracao}</li>
        <li>Multiplicação: ${multiplicacao}</li>
        <li>Divisão: ${divisao}</li>
      </ul>
    `;
  }