import React from "react";
import '../App.css';



const Sidebardata=[
    {
        title:"Home",
        link:"/Home",
    },
    {
        title:"About",
        link:"/About",
    },
    {
        title:"Contact",
        link:"/Contact",
    },
];

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="SidebarList">
         {Sidebardata.map((val,key) =>{
             return(
                 <li key={key} 
                 className="row" 
                 onClick={ () => {window.location.pathname=val.link}}> 
               
                 <div >{val.title}</div>
                 
                 </li>

             );
         }
         )}
         </ul>
        </div>
    )
}

export default Sidebar