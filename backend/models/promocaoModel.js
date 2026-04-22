const db = require("../config/db");

const Promocao = {

    listar: (callback) => {
        const sql = `
            SELECT p.nome, p.imagem_url, pr.preco_novo, pr.desconto_percent
            FROM promocoes pr
            JOIN produtos p ON pr.produto_id = p.id
        `;
        db.query(sql, callback);
    }

};

module.exports = Promocao;