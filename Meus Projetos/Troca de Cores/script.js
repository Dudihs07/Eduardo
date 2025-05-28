function trocaCor(cor) {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = cor
}

function corAleatoria() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    document.body.style.backgroundImage = 'none'
    
    document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`
}

function aplicaCorPersonalizada() {
    const corInput = document.querySelector('.input-cor').value.trim()

    if (!corInput) {
        alert("Por favor, digite uma cor válida (ex: red, blue ou #00ff00).")
        return
    }

    // Testa se o navegador consegue aplicar a cor
    const testElem = document.createElement('div')
    testElem.style.color = corInput
    if (testElem.style.color === "") {
        alert("Cor inválida. Tente novamente.")
        return
    }

    trocaCor(corInput)
}

function escolherImagem(imagem) {
    const reader = new FileReader()

    reader.onload = function(evento) {
        const urlImagem = evento.target.result

        document.body.style.backgroundImage = `url('${urlImagem}')`
    }
    
    reader.readAsDataURL(imagem)
}