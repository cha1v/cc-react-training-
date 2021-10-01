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

