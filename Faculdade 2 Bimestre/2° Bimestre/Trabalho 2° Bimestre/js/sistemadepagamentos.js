function calcularSalario() {
  const nivel = document.getElementById("nivel").value;
  const qtdAulas = parseFloat(document.getElementById("aulas").value);
  let valorHora = 0;

  if (isNaN(qtdAulas) || qtdAulas <= 0) {
    document.getElementById("resultado").textContent = "Digite uma quantidade válida de aulas.";
    return;
  }

  switch (nivel) {
    case "1":
      valorHora = 12;
      break;
    case "2":
      valorHora = 17;
      break;
    case "3":
      valorHora = 25;
      break;
  }

  const salario = valorHora * qtdAulas * 4.5;
  document.getElementById("resultado").textContent = `Salário mensal: R$ ${salario.toFixed(2)}`;
}