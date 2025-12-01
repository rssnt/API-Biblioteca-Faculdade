// Servidor principal da aplicação

const express = require("express");
const app = express();
const db = require("./models/db");

const autoresRoutes = require("./routes/autoresRoutes");
const generosRoutes = require("./routes/generosRoutes");
const livrosRoutes = require("./routes/livrosRoutes");

app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("API da Biblioteca - funcionando!");
});

// Rotas principais
app.use("/autores", autoresRoutes);
app.use("/generos", generosRoutes);
app.use("/livros", livrosRoutes);

// Sincroniza banco e inicia servidor
db.sync().then(() => {
  console.log("Banco sincronizado com sucesso!");
  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });
});
