//import React,{useState} from "react";
import Searchbar from "./Searchbar";
import Radio from "./Radio";
import './App.css'
function App(){
  
  return(
    <div className="app">
      <h2>User Information</h2>
      <Searchbar/><br/>
      <Radio/>
    </div>
  );
}
export default App





























/*  const [searchValue,setsearchValue]=useState('')
  const inputchange=(event) => {
     
     setsearchValue(event.target.value)
  }
  const handleclear=() => {
      setsearchValue("")
  }
  return(
    <div>
      <Searchbar/>
      <input  maxLength="10"
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }  }}
        value={searchValue} onChange={inputchange}/>

    </div>
  );
}
export default App*/