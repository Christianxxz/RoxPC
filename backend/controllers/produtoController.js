const Produto = require("../models/produtoModel");

exports.listar = (req, res) => {
    Produto.listar((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.buscarPorId = (req, res) => {
    Produto.buscarPorId(req.params.id, (err, result) => {
        if (result.length === 0) {
    return res.status(404).json({ erro: "Produto não encontrado" });
}

res.json(result[0]);
    });
};

exports.buscarPorCategoria = (req, res) => {
    Produto.buscarPorCategoria(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};