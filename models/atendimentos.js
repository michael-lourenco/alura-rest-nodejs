const moment = require('moment');
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO Atendimentos SET ?`;            
            conexao.query(sql, atendimentoDatado, (err, resultados) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resultados);
                }
            });
        });
    }
}

module.exports = new Atendimento
