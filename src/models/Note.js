const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Note = sequelize.define('Note', {
  titulo: DataTypes.STRING,
  conteudo: DataTypes.TEXT
});

module.exports = Note;