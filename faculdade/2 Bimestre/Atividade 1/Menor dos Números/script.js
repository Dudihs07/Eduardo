function encontrarMenor() {
    var v1 = Number(document.getElementById("valor1").value);
    var v2 = Number(document.getElementById("valor2").value);
    var v3 = Number(document.getElementById("valor3").value);
    var v4 = Number(document.getElementById("valor4").value);
    var resultado = document.getElementById("resultado");
  
    if (isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4)) {
      resultado.textContent = "Por favor, preencha todos os campos com números válidos.";
      return;
    }
  
    var menor = v1;
  
    if (v2 < menor) menor = v2;
    if (v3 < menor) menor = v3;
    if (v4 < menor) menor = v4;
  
    resultado.textContent = "O menor valor é: " + menor;
  }