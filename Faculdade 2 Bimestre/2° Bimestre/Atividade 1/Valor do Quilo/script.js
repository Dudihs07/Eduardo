function calcularValor() {
    const precoQuilo = parseFloat(document.getElementById("precoQuilo").value);
    const quantidadeQuilos = parseFloat(document.getElementById("quantidadeQuilos").value);

    if (isNaN(precoQuilo) || isNaN(quantidadeQuilos)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    const valorTotal = precoQuilo * quantidadeQuilos;

    document.getElementById("resultado").innerText =
        "O valor total a ser pago é: R$ " + valorTotal.toFixed(2);
}