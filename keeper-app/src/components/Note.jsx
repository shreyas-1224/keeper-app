import React from "react";

function Note(props) {
  console.log(props);
  console.log("shreyas");
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;
