function verificarTriangulo() {
  const x = parseFloat(document.getElementById("ladoX").value);
  const y = parseFloat(document.getElementById("ladoY").value);
  const z = parseFloat(document.getElementById("ladoZ").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    resultado.textContent = "Por favor, insira valores válidos para todos os lados.";
    return;
  }

  // Verifica se é um triângulo válido
  if (x < y + z && y < x + z && z < x + y) {
    if (x === y && y === z) {
      resultado.textContent = "É um triângulo equilátero.";
    } else if (x === y || y === z || x === z) {
      resultado.textContent = "É um triângulo isósceles.";
    } else {
      resultado.textContent = "É um triângulo escaleno.";
    }
  } else {
    resultado.textContent = "Os valores fornecidos não formam um triângulo.";
  }
} 
