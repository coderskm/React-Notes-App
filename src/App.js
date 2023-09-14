import React, { useEffect, useState } from 'react'
import NoteCreate from './components/NoteCreate';
import NoteList from './components/NoteList';
function App() {
    let oldNotes = localStorage.getItem('notes');
    const [notes, setNotes] = useState(JSON.parse(oldNotes)|| []);
    const editNoteById = (id, newTitle) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...notes, title: newTitle };
            }
            return note;
        })
        setNotes(updatedNotes);
    }
    const deleteNoteById = (id) => {
        const updatedNotes = notes.filter((note) => {
            return note.id !== id;
        })
        setNotes(updatedNotes);
    }
    const createNote = (title) => {
        const updatedNotes = [...notes, { id: Math.round(Math.random()*9999), title }];
        setNotes(updatedNotes);
    } 
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
  return (
      <div className='app'>
          <h1>React Notes App</h1>
          <NoteList onEdit={editNoteById} notes={notes} onDelete={ deleteNoteById} />
          <NoteCreate onCreate = {createNote} />
    </div>
  )
}

export default App