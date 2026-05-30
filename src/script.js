function enviarMensagem() {
    const formulario = document.getElementById("contato-whatsapp")
    const mensagem_completa = document.getElementById("mensagem-completa")

    // Pegar os campos para montar mensagem
    const mensagem = document.getElementById("mensagem")
    const nome = document.getElementById("nome")

    if (formulario.checkValidity()) {
        mensagem_completa.value = `
                                    Meu nome é ${nome.value}, gostaria de saber mais sobre:
                                    *Mais informações:* ${mensagem.value}
                                    `
        formulario.submit()
    } else {
        formulario.reportValidity()
    }
}