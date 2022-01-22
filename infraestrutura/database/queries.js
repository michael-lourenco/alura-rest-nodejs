const conexao = require('./conexao');

const executaQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, params, (erro, resultados, campos) => {
            if (erro) {
                reject(erro)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = executaQuery
