const { Folder } = require('../models');

module.exports = {

  async create(req, res) {
    const folder = await Folder.create({
      titulo: req.body.titulo,
      UserId: req.userId
    });

    res.json(folder);
  },

  async list(req, res) {
    const folders = await Folder.findAll({
      where: { UserId: req.userId }
    });

    res.json(folders);
  }

};