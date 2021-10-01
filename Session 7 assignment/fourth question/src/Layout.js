import React from "react";

function Layout({component:Component}){
    return(
        <div><h1>hello  </h1>
            {<Component/>}
          
        </div>
    )
}
export default Layout