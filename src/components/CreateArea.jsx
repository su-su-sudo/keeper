import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  function handleChange(e){
    const {name, value} = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(e){
    e.preventDefault();
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    });
  }

  function keyPress(e){
    if (e.keyCode === 13){
      submitNote(e)
    }
  }
  
  
  return (
    <div>
      <form>
        <input 
        onChange={handleChange}
        value={note.title}
        name="title" 
        placeholder="Title" 
        />
        <textarea 
        onChange={handleChange}
        value={note.content}
        onKeyDown={keyPress}
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
