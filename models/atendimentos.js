const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO Atendimentos SET ?`;            
            conexao.query(sql, atendimento, (err, resultados) => {
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
