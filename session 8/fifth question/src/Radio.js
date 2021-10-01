import React,{useState} from "react";

function Radio(){
    const [formData,setformData]=useState({
        isAgree :false,
        pack:" "
      })
     const handleclick=event =>{
       const target=event.target
       const name=target.name
       const value=target.value
       setformData({
         ...formData,
         [name]:value
       })
     }
    
return(<div className="radio">
    
       <label>Has Data Pack :<br/>
       <label>yes </label>
       
            <input type="radio" value="Yes" name="pack"  onChange={handleclick}/>
       <br/>
       <label>No</label>
            <input type="radio" value="No" name="pack" onChange={handleclick}/>
       <br/>
      
      <p><h3>your answer : {formData.pack}</h3></p>
       </label>
       
      
    </div>

);

}
export default Radio