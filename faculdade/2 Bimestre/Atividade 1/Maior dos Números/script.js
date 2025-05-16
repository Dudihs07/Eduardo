function compararValores() {
    const v1 = parseFloat(document.getElementById("valor1").value);
    const v2 = parseFloat(document.getElementById("valor2").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(v1) || isNaN(v2)) {
      resultado.textContent = "Por favor, insira dois números válidos.";
      return;
    }
  
    if (v1 > v2) {
      resultado.textContent = `O maior valor é: ${v1}`;
    } else if (v2 > v1) {
      resultado.textContent = `O maior valor é: ${v2}`;
    } else {
      resultado.textContent = "Os dois valores são iguais.";
    }
  }