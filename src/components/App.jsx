import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, addNotes] = useState([]);
    
  function addNote(note){
    addNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id){
    addNotes(prevNote => {
      return prevNote.filter((note, index) => {
          return index !== id;
        });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => {
        return(
        <Note 
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />);
      })}     
      <Footer />
    </div>
  );
}

export default App;
