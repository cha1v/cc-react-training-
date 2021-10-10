import Searchbar from "./components/Searchbar";
import List from "./components/List"
import React from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";

function App(){
  const stories =[
    {
      name:"Kevin Mitnick",
      age:58,
      position:1,
      url:<a href="https://www.knowbe4.com/products/who-is-kevin-mitnick/">Biography</a>,
    },
    {
      name:"Jonathan James",
      age:24,
      position:2,
      url:<a href="https://pantheon.world/profile/person/Jonathan_James/">Biography</a>,
  },
  {
    name:" Matthew Bevan and Richard Pryce",
    age:40,
    position:3,
    url:<a href="https://www.wikiwand.com/en/Albert_Gonzalez">Biography</a>,
  },
  {
    name:" Jeanson James Ancheta",
    age:36,
    position:5,
    url:<a href="https://en.wikipedia.org/wiki/Jeanson_James_Ancheta">Biography</a>,
  },
  {
    name:" Michael Calce",
    age:40,
    position:6,
    url:<a href="https://en.wikipedia.org/wiki/Michael_Calce">Biography</a>,
  },
  ];

  
  const [searchValue,setSearchTerm]=useSemiPersistenceState()
  const handleOnSearch=(event) => {
     setSearchTerm(event.target.value);
  }

  const newstory =stories.filter((story) =>
  story.name.toLowerCase().includes(searchValue.toLowerCase()) );

  return(
    <div>
    
   <Searchbar  onSearch={handleOnSearch}/>
   <h4>Searching For:{searchValue}</h4>
   <List stories={newstory}></List>
   </div>
  );
}

export default App

 



