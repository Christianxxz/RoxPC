const db = require("../config/db");

const Categoria = {

    listar: (callback) => {
        db.query("SELECT * FROM categorias", callback);
    }

};

module.exports = Categoria;