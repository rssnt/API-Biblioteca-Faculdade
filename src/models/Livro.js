const { DataTypes } = require("sequelize");
const sequelize = require('./db');
const Autor = require("./Autor");
const Genero = require("./Genero");

const Livro = sequelize.define("Livro", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

// relações
Livro.belongsTo(Autor, { foreignKey: "autorId" });
Livro.belongsTo(Genero, { foreignKey: "generoId" });

module.exports = Livro;
