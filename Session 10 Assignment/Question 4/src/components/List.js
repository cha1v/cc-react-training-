import React from "react";


function List({stories}){
    return(
        <div>
            <ul className="list"><p> <h3>Hackers List:</h3></p>
                {stories.map(function (item){
                    return(
                        <li className="com">
                            <span><i>{item.name}</i></span>
                            <span><i>{item.age}</i></span>
                            <span><i>{item.position}</i></span>
                            <span>{item.url}</span>
                        </li>
                    );
                }
                )}
           </ul>
        </div>
    );

    
}
export default List