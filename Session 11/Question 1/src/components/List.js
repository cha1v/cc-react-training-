import React from "react";


function List({stories,onRemove}){
    return(
        <div >
            <ol className="list" ><p> <h3>Hackers List:</h3></p>
                {stories.map(function (item){
                    return(
                        <li className="com" style={{width:100}} >
                            <span ><i>{item.name}</i></span>
                            <span><i>{item.age}</i></span>
                           
                            <span>{item.url}</span>
                            <button type="button" onClick={() => onRemove(item.id)}>
                             Delete
                                </button>
                        
                        </li>
                    );
                }
                )}
           </ol>
        </div>
    );

    
}
export default List