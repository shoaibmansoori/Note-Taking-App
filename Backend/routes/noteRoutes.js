const express = require('express');
const router = express.Router();
const NoteController = require('../controller/noteController');

// CRUD Routes
router.post('/', NoteController.createNote);
router.get('/', NoteController.getAllNotes);
router.get('/:id', NoteController.getNoteById);
router.put('/:id', NoteController.updateNote);
router.delete('/:id', NoteController.deleteNote);

module.exports = router;
