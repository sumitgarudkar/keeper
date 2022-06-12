import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props) {

  function handleClick(event){
    event.preventDefault();
    props.deleteNote(props.id);
  }

  return (
    <div className='note'>
        <h1 className='title'>{props.title}</h1>
        <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon/></button>
    </div>
  )
}

export default Notes;