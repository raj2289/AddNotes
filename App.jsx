
import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setnotes]=useState([])
 function addNote(newNotes)
 {
   setnotes(prevnotes=>{
     return[...prevnotes, newNotes];
   });
 }
 function deleteNote(id)
 {
  setnotes(prevnotes=>{
    return prevnotes.filter((NewItem,index)=>{
      return index!==id;
    });
 })
}

  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((NewItem, index) =>{return <Note
   key={index}
  id={index}
   title={NewItem.title}
ondelete={deleteNote}
   content={NewItem.content}
      />;})}

      <Footer />
    </div>
  );
}

export default App;
//import React, {useState} from "react";
//import Header from "./Header";
//import Footer from "./Footer";
//import Note from "./Note";
//import notes from "../notes";
//import Login from "./Login";
//import Form from "./Form";



//function App()
//{setInterval(gettime,1000);
  //var t = new Date().toLocaleTimeString();
  //const [time, settime]=useState(t);
  //function gettime()  {
    //settime(new Date().toLocaleTimeString())}
//return(
//<div className="container">
//<h1>{time}</h1>
//<button onClick={gettime}>Get Time</button>

//</div>);
//};
//export default App;
