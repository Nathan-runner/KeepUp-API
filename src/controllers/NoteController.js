const { Note } = require('../models');

module.exports = {

  async create(req, res) {
    const note = await Note.create(req.body);
    res.json(note);
  },

  async list(req, res) {
    const notes = await Note.findAll({
      where: { FolderId: req.params.folderId }
    });

    res.json(notes);
  }

};