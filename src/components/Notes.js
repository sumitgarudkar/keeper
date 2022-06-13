import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

function Notes(props) {
  const [edit, setEdit] = useState(false);

  const [note, setNote] = useState({
    title: props.title, content: props.content
  })

  function handleClick(event) {
    event.preventDefault();
    props.deleteNote(props.id);
  }

  function handleEdit(){
    setEdit(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevVal) => {
      return {...prevVal, [name]:value};
    })
  }

  function doneEdit(){
    props.updateNotes(props.id,note);
    setEdit(false);
  }

  return (
    <>
      {edit && <div className='note'>
        <form className='edit-note'>
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Take a Note.."
            rows={2}
            value={note.content}
            onChange={handleChange}>
          </textarea>
          <button type='button' onClick={doneEdit}><DoneIcon/></button>
        </form>
      </div>}

      {!edit && <div className='note'>
        <h1 className='title'>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><DeleteIcon /></button>
        <button onClick={handleEdit}><EditIcon /></button>
      </div>}
    </>
  )
}

export default Notes;