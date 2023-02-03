import React,{useState} from "react";

function CreateArea(props) {

  const [note , setNote] = useState({
    title: "",
    content:""
  });

  function handleChange(event){
    const {name , value} = event.target;
    if(name === "title"){
        setNote((prevValue)=>{
            return({
                title:value,
                content:prevValue.content
            });
        });
    }else if(name === "content"){
        setNote((prevValue)=>{
            return({
                content:value,
                title:prevValue.title
            });
        });
    }
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} rows="3" />
        <button onClick={(event)=>{
          props.handleClick(note);
          setNote(()=>{
            return({
              title:"",
              content:""
            });
          }
          );
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
