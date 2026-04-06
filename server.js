require('dotenv').config();
const app = require('./app.js');
const sequelize = require('./src/config/database.js');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
  });
});