import React,{useState} from "react";
import '../App.css'
function Searchbar(){

    const [searchValue,setsearchValue]=useState('')
    const inputchange=(event) => {
      
       setsearchValue(event.target.value)
    }
    const handleclear=() => {
        setsearchValue("")
    }
    return(
        <div className="search">Search Bar:
         <input type="text" value={searchValue} onChange={inputchange}/><br/>
       Searching for:{searchValue}<br/>
        <button onClick={handleclear}>clear</button>
        </div>
       
    );
}
export default Searchbar;