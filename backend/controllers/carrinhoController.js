const db = require("../config/db");

exports.adicionar = (req, res) => {

    const { usuario_id, produto_id, quantidade } = req.body;

    db.query(
        "INSERT INTO carrinho (usuario_id, produto_id, quantidade) VALUES (?, ?, ?)",
        [usuario_id, produto_id, quantidade],
        (err) => {
            if (err) return res.status(500).json(err);

            res.json({ message: "Adicionado ao carrinho" });
        }
    );
};

exports.listar = (req, res) => {

    const userId = req.params.userId;

    db.query(`
        SELECT c.id, p.nome, p.preco_original, p.imagem_url, c.quantidade
        FROM carrinho c
        JOIN produtos p ON p.id = c.produto_id
        WHERE c.usuario_id = ?
    `, [userId], (err, result) => {

        if (err) return res.status(500).json(err);

        res.json(result);
    });
};

exports.remover = (req, res) => {

    db.query(
        "DELETE FROM carrinho WHERE id = ?",
        [req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);

            res.json({ message: "Removido" });
        }
    );
};