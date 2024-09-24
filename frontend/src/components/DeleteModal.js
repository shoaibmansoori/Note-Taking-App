import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const DeleteModal = ({ note, onDeleteConfirm, onClose }) => {
    const handleDelete = () => {
        onDeleteConfirm(note._id);
        onClose(); // Close the modal after deletion
    };

    return (
        <Modal isOpen={true} toggle={onClose}>
            <ModalHeader toggle={onClose}>Confirm Delete</ModalHeader>
            <ModalBody>
                Are you sure you want to delete the note titled "<strong>{note.title}</strong>"?
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={handleDelete}>Delete</Button>{' '}
                <Button color="secondary" onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteModal;
