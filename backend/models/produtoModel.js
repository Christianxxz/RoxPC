const db = require("../config/db");

const Produto = {

    listar: (callback) => {
        const sql = `
            SELECT p.*, c.nome AS categoria
            FROM produtos p
            LEFT JOIN categorias c ON p.categoria_id = c.id
        `;
        db.query(sql, callback);
    },

    buscarPorId: (id, callback) => {
        db.query("SELECT * FROM produtos WHERE id = ?", [id], callback);
    },

    buscarPorCategoria: (categoria_id, callback) => {
        db.query("SELECT * FROM produtos WHERE categoria_id = ?", [categoria_id], callback);
    }

};

module.exports = Produto;