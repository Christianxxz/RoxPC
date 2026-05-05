const db = require("../config/db");

const Produto = {

    listar: (callback) => {
    const sql = `
        SELECT 
            p.*,
            c.nome AS categoria,
            CASE
                WHEN p.preco_promocao IS NOT NULL 
                THEN p.preco_promocao
                ELSE p.preco_original
            END AS preco_final
        FROM produtos p
        LEFT JOIN categorias c ON p.categoria_id = c.id
    `;

    db.query(sql, callback);
},

   buscarPorId: (id, callback) => {
    const sql = `
        SELECT 
            p.*,
            c.nome AS categoria,
            CASE
                WHEN p.preco_promocao IS NOT NULL
                THEN p.preco_promocao
                ELSE p.preco_original
            END AS preco_final
        FROM produtos p
        LEFT JOIN categorias c ON p.categoria_id = c.id
        WHERE p.id = ?
    `;

    db.query(sql, [id], callback);
},

    buscarPorCategoria: (categoria_id, callback) => {
    const sql = `
        SELECT 
            p.*,
            c.nome AS categoria,
            CASE
                WHEN p.preco_promocao IS NOT NULL
                THEN p.preco_promocao
                ELSE p.preco_original
            END AS preco_final
        FROM produtos p
        LEFT JOIN categorias c ON p.categoria_id = c.id
        WHERE p.categoria_id = ?
    `;

    db.query(sql, [categoria_id], callback);
},

buscarDestaques: (callback) => {
    const sql = `
        SELECT p.*
        FROM destaques d
        JOIN produtos p ON p.id = d.produto_id
        ORDER BY d.ordem
    `;

    db.query(sql, callback);
},

};

module.exports = Produto;