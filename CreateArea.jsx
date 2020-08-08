import React,{useState} from "react";

function CreateArea(props) {
  const [note, setnote]=useState({
    title:"",
    content:""
  });
function handlechange(event)
{
  const {name,value}=event.target;
  setnote(prevNotes => {
    return {
      ...prevNotes,
      [name]:value
    };
  });
}
function submitted(event)
{
  props.onAdd(note);
  setnote(
    {title:"",
    content:""});
  event.preventDefault();
}
  return (
    <div>
      <form>
        <input type="text" name="title" onChange={handlechange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handlechange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitted}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
