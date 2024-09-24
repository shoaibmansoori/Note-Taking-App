import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const NoteModal = ({ note, onClose, onEditNote }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/api/notes/${note._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }),
            });
            const updatedNote = await res.json();
            onEditNote(updatedNote);
            onClose();
        } catch (error) {
            console.error('Error updating note', error);
        }
    };

    return (
        <Modal isOpen={true} toggle={onClose}>
            <ModalHeader toggle={onClose}>Edit Note</ModalHeader>
            <Form onSubmit={handleSubmit}>
                <ModalBody>
                    <FormGroup>
                        <Label for="noteTitle">Title</Label>
                        <Input 
                            id="noteTitle" 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="noteContent">Content</Label>
                        <Input 
                            id="noteContent" 
                            type="textarea" 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            maxLength={500} 
                            required 
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary">Save</Button>{' '}
                    <Button color="secondary" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
};

export default NoteModal;
