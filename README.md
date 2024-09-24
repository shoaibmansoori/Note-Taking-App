# Note-Taking Application

## Overview

This is a full-stack note-taking application built using **Node.js**, **Express**, **MongoDB**, and **React**. The application allows users to create, view, edit, and delete notes, and includes search functionality and a confirmation dialog for deleting notes.

## Features

- Create, view, edit, and delete notes
- Search notes by title
- Delete confirmation dialog
- Basic error notifications for failed operations
- Responsive design with Bootstrap

## Technologies

- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Frontend**: React, Bootstrap
- **Styling**: Reactstrap, CSS

## Installation

### Backend

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-repo/note-taking-app.git
    ```

2. **Navigate to the backend directory**:

    ```bash
    cd Backend
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the `backend` directory with the following content:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

5. **Run the server**:

    ```bash
    npm start
    ```

### Frontend

1. **Navigate to the frontend directory**:

    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm start
    ```

## API Endpoints

### Notes

- **Create Note**

    - **Endpoint**: `POST /api/notes`
    - **Request Body**: 
      ```json
      {
        "title": "string",
        "content": "string"
      }
      ```
    - **Response**: 
      ```json
      {
        "_id": "string",
        "title": "string",
        "content": "string",
        "createdAt": "date"
      }
      ```

- **Get All Notes**

    - **Endpoint**: `GET /api/notes`
    - **Response**: 
      ```json
      [
        {
          "_id": "string",
          "title": "string",
          "content": "string",
          "createdAt": "date"
        }
      ]
      ```

- **Get Note by ID**

    - **Endpoint**: `GET /api/notes/:id`
    - **Response**: 
      ```json
      {
        "_id": "string",
        "title": "string",
        "content": "string",
        "createdAt": "date"
      }
      ```

- **Update Note**

    - **Endpoint**: `PUT /api/notes/:id`
    - **Request Body**: 
      ```json
      {
        "title": "string",
        "content": "string"
      }
      ```
    - **Response**: 
      ```json
      {
        "_id": "string",
        "title": "string",
        "content": "string",
        "createdAt": "date"
      }
      ```

- **Delete Note**

    - **Endpoint**: `DELETE /api/notes/:id`
    - **Response**: 
      ```json
      {
        "message": "Note deleted successfully"
      }
      ```

## Frontend Features

- **Add Note**: Create a new note using the form.
- **Edit Note**: Click the edit button on a note to open a modal for editing.
- **Delete Note**: Click the delete button to remove a note. A confirmation dialog will appear.
- **Search Notes**: Use the search bar to filter notes by title.
- **Error Handling**: If an operation fails, an error message is displayed.

## Search and Delete Confirmation Dialog

1. **Search**: A search bar is provided in the frontend to filter notes based on the title.
2. **Delete Confirmation**: When the delete button is clicked, a confirmation dialog appears before the note is deleted.

## Error Handling

- Input validation: 
  - **Title**: Required field.
  - **Content**: Maximum 500 characters.
- Error messages are displayed if note creation, update, or deletion fails.

## Folder Structure

```bash
note-taking-app/
├── backend/                # Backend code (Node.js + Express)
│   ├── models/             # Mongoose models
│   ├── controllers/        # controllers
│   ├── routes/             # Express routes (API)
│   ├── .env                # Environment variables
│   ├── server.js           # Express app entry point
├── frontend/               # Frontend code (React)
│   ├── components/         # React components (NoteForm, NoteList, NoteModal)
│   ├── App.js              # Main React component
│   ├── index.js            # React entry point
├── README.md               # Project documentation
