const User = require('./User');
const Folder = require('./Folder');
const Note = require('./Note');

// RELAÇÕES
User.hasMany(Folder);
Folder.belongsTo(User);

Folder.hasMany(Note);
Note.belongsTo(Folder);

module.exports = { User, Folder, Note };