import React, { useState } from 'react'

function NoteCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  }
  return (
    <div className='book-create'>
      <h3>Add A Note</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create!</button>
      </form>

    </div>
  )
}

export default NoteCreate;