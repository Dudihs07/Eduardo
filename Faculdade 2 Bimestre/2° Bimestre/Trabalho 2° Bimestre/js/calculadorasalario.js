function calcularSalario() {
  const salario = parseFloat(document.getElementById("salario").value);
  const codigo = parseInt(document.getElementById("codigo").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(salario) || isNaN(codigo) || salario < 0) {
    resultado.textContent = "Por favor, insira um salário e código válidos.";
    return;
  }

  let percentual;

  switch (codigo) {
    case 101:
      percentual = 0.10;
      break;
    case 102:
      percentual = 0.20;
      break;
    case 103:
      percentual = 0.30;
      break;
    default:
      percentual = 0.40;
      break;
  }

  const aumento = salario * percentual;
  const novoSalario = salario + aumento;

  resultado.innerHTML = `
    Salário antigo: R$ ${salario.toFixed(2)}<br>
    Novo salário: R$ ${novoSalario.toFixed(2)}<br>
    Aumento: R$ ${aumento.toFixed(2)}
  `;
}