const fs = require('fs')
const path = require('path')


module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => { 

    const tiposValidos = ['png', 'jpeg', 'jpg', 'gif']

    const tipo = path.extname(caminho)

    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1))

    if(tipoEhValido === -1) {
        callbackImagemCriada('Tipo de arquivo inválido')
        return
    } else {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(novoCaminho))
    }
}

