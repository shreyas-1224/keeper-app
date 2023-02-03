import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const[notes , setNotes] = useState([]);

  function handleClick(note){
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  
  return (
    <div>
      <Header />
      <CreateArea 
        handleClick={handleClick}
        notes={notes}
      />
      {
        notes.map(function (note) {
          return <Note key={note.title} title={note.title} content={note.content} />;
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
