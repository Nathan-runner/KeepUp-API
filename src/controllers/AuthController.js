const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

  async register(req, res) {
    const { nome, email, senha } = req.body;

    const hash = await bcrypt.hash(senha, 10);

    const user = await User.create({ nome, email, senha: hash });

    res.json(user);
  },

  async login(req, res) {
    const { email, senha } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ erro: "Usuário não encontrado" });

    const valid = await bcrypt.compare(senha, user.senha);

    if (!valid) return res.status(401).json({ erro: "Senha inválida" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.json({ token });
  }

};