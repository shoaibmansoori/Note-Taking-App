import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const NoteForm = ({ onAddNote, setError }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || content.length > 500) {
            setError('Title is required and content should not exceed 500 characters.');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }),
            });

            if (!res.ok) {
                throw new Error('Failed to create note');
            }

            const newNote = await res.json();
            onAddNote(newNote);
            setTitle('');
            setContent('');
            setError(null); // Clear any previous errors
        } catch (error) {
            setError('Error creating note. Please try again.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                />
            </FormGroup>
            <FormGroup>
                <Label for="content">Content</Label>
                <Input 
                    type="textarea" 
                    name="content" 
                    id="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter content"
                    maxLength="500"
                />
            </FormGroup>
            <Button color="primary" type="submit">Add Note</Button>
        </Form>
    );
};

export default NoteForm;
