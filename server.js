require('dotenv').config();
const app = require('./app.js');
const sequelize = require('./src/config/database.js');

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Servidor rodando 🚀");
  });
});