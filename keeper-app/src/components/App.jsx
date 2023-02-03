import React from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  

  function handleClick(note){
    console.log(note);
  }
  
  return (
    <div>
      <Header />
      <CreateArea 
        handleClick={handleClick}
      />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
