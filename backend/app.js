const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", require("./routes/produtoRoutes"));
app.use("/categorias", require("./routes/categoriaRoutes"));
app.use("/promocoes", require("./routes/promocaoRoutes"));

module.exports = app;