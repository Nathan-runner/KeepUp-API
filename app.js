const express = require('express');
const routes = require('./src/routes');
require('dotenv').config();
const sequelize = require('./src/config/database.js');

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado ao Supabase com Sequelize');
  })
  .catch(err => {
    console.error('❌ Erro na conexão:', err);
  });

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;