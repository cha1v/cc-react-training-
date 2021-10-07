import React from "react";
import {useEffect, useState} from 'react';
import "./Count.css"

function Count(){
    const [num,setNum]=useState(Number(localStorage.getItem('num')) || 0);
    const clickhandler =() => {
        setNum(num+1)
    };

    useEffect (() => {
        localStorage.setItem("num",num);
    },[num]);

  

    const clickhandler2 =() => {
        setNum(num-1)
    };
   
    return(
       <div className="count">
          <div className="num"> <h3>{num}</h3></div>
         <div >  <button onClick={clickhandler} className="btn1">+</button></div>
           <button onClick={clickhandler2} className="btn2">-</button>
       </div>
    );
}

export default Count;