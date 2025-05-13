function verificarImpar() {
    const valor = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valor)) {
      resultado.textContent = "Por favor, digite um número válido.";
      return;
    }
  
    if (valor % 2 !== 0) {
      resultado.textContent = "O número é ímpar.";
    } else {
      resultado.textContent = "O número não é ímpar.";
    }
  }