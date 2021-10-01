import React,{useState} from "react";

function Searchbar(){

    const [searchValue,setsearchValue]=useState('')
    const inputchange=(event) => {
       
       setsearchValue(event.target.value)
    }
    const handleclear=() => {
        setsearchValue("")
    }
    return(
        <div>Phone Number :
         <input  maxLength='10' value={searchValue} onChange={inputchange}
         onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();}}} /><br/>
       {searchValue}<br/>
        <button onClick={handleclear}>clear</button>
        </div>
       
    );
}
export default Searchbar