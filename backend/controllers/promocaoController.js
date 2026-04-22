const Promocao = require("../models/promocaoModel");

exports.listar = (req, res) => {
    Promocao.listar((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.buscarPorId = (req, res) => {
    Promocao.buscarPorId(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result[0]);
    });
};