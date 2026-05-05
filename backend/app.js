const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", require("./routes/produtoRoutes"));
app.use("/categorias", require("./routes/categoriaRoutes"));
app.use("/promocoes", require("./routes/promocaoRoutes"));
app.use("/icons", express.static("icons"));
app.use("/carrinho" , require("./routes/carrinhoRoutes"));
app.use("/auth", require("./routes/authRoutes"));

module.exports = app;