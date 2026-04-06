const express = require('express');
const router = express.Router();

const Auth = require('../controllers/AuthController');
const Folder = require('../controllers/FolderController');
const Note = require('../controllers/NoteController');
const auth = require('../middlewares/authMiddleware');

// Auth
router.post('/auth/register', Auth.register);
router.post('/auth/login', Auth.login);

// Folder
router.post('/folders', auth, Folder.create);
router.get('/folders', auth, Folder.list);

// Notes
router.post('/notes', auth, Note.create);
router.get('/notes/:folderId', auth, Note.list);

module.exports = router;