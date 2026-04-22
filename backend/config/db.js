const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "roxpc"
});

connection.connect(err => {
    if (err) {
        console.error("Erro ao conectar:", err);
    } else {
        console.log("Conectado ao MySQL");
    }
});

module.exports = connection;