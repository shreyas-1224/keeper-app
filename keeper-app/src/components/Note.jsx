import React from "react";

function Note(props) {
  console.log(props);
  console.log("shreyas");
  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button onClick={()=>{
        props.handleDelete(props.note);
      }}>DELETE</button>
    </div>
  );
}

export default Note;
