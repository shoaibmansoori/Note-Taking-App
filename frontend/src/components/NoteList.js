import React, { useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import DeleteModal from './DeleteModal';

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
    const [selectedNoteToDelete, setSelectedNoteToDelete] = useState(null);

    const openDeleteModal = (note) => {
        setSelectedNoteToDelete(note);
    };

    const closeDeleteModal = () => {
        setSelectedNoteToDelete(null);
    };

    const handleDeleteConfirm = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/notes/${id}`, { method: 'DELETE' });
            onDeleteNote(id);  // Call parent function to remove note from state
        } catch (error) {
            console.error('Error deleting note', error);
        }
    };

    return (
        <>
            <ListGroup>
                {notes.map(note => (
                    <ListGroupItem key={note._id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{note.title}</h5>
                            <p>{note.content}</p>
                        </div>
                        <div>
                            <Button color="warning" size="sm" className="mr-2" onClick={() => onEditNote(note)}>Edit</Button>
                            <Button color="danger" size="sm" onClick={() => openDeleteModal(note)}>Delete</Button>
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {/* Show Delete Modal when a note is selected for deletion */}
            {selectedNoteToDelete && (
                <DeleteModal 
                    note={selectedNoteToDelete} 
                    onDeleteConfirm={handleDeleteConfirm} 
                    onClose={closeDeleteModal} 
                />
            )}
        </>
    );
};

export default NoteList;
