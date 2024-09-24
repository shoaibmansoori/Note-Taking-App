const Note = require('../models/note');

// Create a new note
exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({
            title,
            content
        });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: 'Error creating note', error });
    }
};

// Retrieve all notes
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving notes', error });
    }
};

// Retrieve a note by ID
exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving note', error });
    }
};

// Update a note
exports.updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ message: 'Error updating note', error });
    }
};

// Delete a note
exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note', error });
    }
};
