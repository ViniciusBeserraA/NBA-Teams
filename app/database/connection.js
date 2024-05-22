import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin123',
    database: 'bdnba'
})

conexao.connect();

/**
 * exceuta um código sql com ou sem valores
 * @param {string} sql instrucao sql a ser executada
 * @param {string=id} values valores a serem passados para o sql 
 * @param {string} messageReject mensagem a ser exibido
 */

export const consulta = (sql, values = '', messageReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (erro, res) => {
            if (erro) return reject(messageReject);
            const row = JSON.parse(JSON.stringify(res));
            resolve(row);
        });
    });
};

export default conexao;
