const db = require("../config/db");
const bcrypt = require("bcrypt");

// CADASTRO
exports.register = async (req, res) => {

    const { nome, email, senha } = req.body;

    // validação básica
    if (!nome || !email || !senha) {
        return res.json({ erro: "Preencha todos os campos" });
    }

    try {

        // criptografa a senha
        const hash = await bcrypt.hash(senha, 10);

        db.query(
            "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)",
            [nome, email, hash],
            (err) => {

                if (err) {
                    console.log("ERRO SQL:", err);

                    // email duplicado
                    if (err.code === "ER_DUP_ENTRY") {
                        return res.json({ erro: "Email já cadastrado" });
                    }

                    return res.status(500).json({ erro: err.sqlMessage });
                }

                res.json({ message: "Usuário criado com sucesso" });
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({ erro: "Erro ao cadastrar usuário" });
    }
};


// LOGIN
exports.login = (req, res) => {

    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.json({ erro: "Preencha todos os campos" });
    }

    db.query(
        "SELECT * FROM usuarios WHERE email = ?",
        [email],
        async (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            if (result.length === 0) {
                return res.json({ erro: "Usuário não encontrado" });
            }

            const user = result[0];

            // compara senha com hash
            const senhaCorreta = await bcrypt.compare(senha, user.senha_hash);

            if (!senhaCorreta) {
                return res.json({ erro: "Senha inválida" });
            }

            // remove senha antes de enviar
            delete user.senha_hash;

            res.json(user);
        }
    );
};