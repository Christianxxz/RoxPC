const Categoria = require("../models/categoriaModel");

exports.listar = (req, res) => {
    Categoria.listar((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.buscarPorId = (req, res) => {
    Categoria.buscarPorId(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result[0]);
    });
};