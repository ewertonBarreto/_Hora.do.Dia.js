function carrega() {
    let mensagem = window.document.getElementById("div1")
    let img = window.document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    mensagem.innerHTML = `Agora são ${hora}hrs e ${data.getMinutes()}min`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(34, 113 , 179)'
        mensagem.innerHTML += ', bom dia!'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(255, 155, 0)'
        mensagem.innerHTML += ', boa tarde!'
    }
    else {
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(105, 105, 105)'
        mensagem.innerHTML += ', boa noite!'
    }

    let mensagemrodape = window.document.getElementById("rodape")
    mensagemrodape.innerHTML = `*Atualizado em ${data.getDate()}`
    mensagemrodape.innerHTML += ` / ${mes+1}`
    mensagemrodape.innerHTML += ` / ${ano}.`
}

