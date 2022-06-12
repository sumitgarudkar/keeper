import React, { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';

function App() {
  const[notes,setNotes] = useState([]);

  function addNote(note){
    if(note.content.length>0 && note.title.length>0){
    setNotes((prevVal)=>{
      return([...prevVal,note]);
    });}
  }

  function deleteNote(id) {
    setNotes((prevVal) => {
      return (prevVal.filter((val,i)=>{
        return i!==id;
      }));
    });
  }

  return (
    <>
      <Header/>
      <CreateArea addNote={addNote}/>
      {
        notes.map((note,idx)=>{
          return <Notes key={idx} id={idx} title={note.title} content={note.content} deleteNote={deleteNote}/>
        })
      }
      <Footer/>
    </>
  );
}

export default App;
