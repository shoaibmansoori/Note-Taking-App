import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [error, setError] = useState(null);  // Error state for notifications
    const [searchQuery, setSearchQuery] = useState('');  // Search query state

    // Fetch notes on component load
    useEffect(() => {
        fetch('http://localhost:5000/api/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
            .catch(err => {
                console.error(err);
                setError('Failed to fetch notes.');
            });
    }, []);

    // Handle adding a new note
    const handleAddNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    // Handle editing a note
    const handleEditNote = (updatedNote) => {
        setNotes(notes.map(note => note._id === updatedNote._id ? updatedNote : note));
        setSelectedNote(null);  // Close the modal after editing
    };

    // Handle deleting a note
    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note._id !== id));
    };

    // Filter notes by search query (search by title)
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="container mt-4">
            <h1 className="text-center">Notes</h1>

            {/* Error Notification */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Search Input */}
            <div className="mb-3">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Note Form for adding a new note */}
            <NoteForm onAddNote={handleAddNote} setError={setError} />

            {/* Notes List */}
            <NoteList 
                notes={filteredNotes} 
                onEditNote={setSelectedNote}  // Select the note to be edited
                onDeleteNote={handleDeleteNote} 
            />

            {/* Edit Modal */}
            {selectedNote && (
                <NoteModal 
                    note={selectedNote} 
                    onClose={() => setSelectedNote(null)} 
                    onEditNote={handleEditNote}  // Save the edited note
                />
            )}
        </div>
    );
}

export default App;

