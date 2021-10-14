import Searchbar from "./components/Searchbar";
import List from "./components/List"
import React,{useState} from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";

function App(){
  const stories =[
   {
      id:'a',
      name:"Kevin Mitnick",
      age:58,
    
      url:<a href="https://www.knowbe4.com/products/who-is-kevin-mitnick/">Biography</a>,
    },
    {
      id:'b',
      name:"Jonathan James",
      age:24,
      
      url:<a href="https://pantheon.world/profile/person/Jonathan_James/">Biography</a>,
  },
  {
    id:'c',
    name:" Matthew Bevan and Richard Pryce",
    age:40,
 
    url:<a href="https://www.wikiwand.com/en/Albert_Gonzalez">Biography</a>,
  },
{
    id:'d',
    name:" Jeanson James Ancheta",
    age:36,
   
    url:<a href="https://en.wikipedia.org/wiki/Jeanson_James_Ancheta">Biography</a>,
  },
   {
    id:'e',
    name:" Michael Calce",
    age:40,
   
    url:<a href="https://en.wikipedia.org/wiki/Michael_Calce">Biography</a>,
  },
  ]; 
  const [searchValue,setSearchTerm]=useSemiPersistenceState()

 
  const handleOnSearch=(event) => {
     setSearchTerm(event.target.value);
  }
  const [newstories, setNewstories] =useState(stories);
 
  function handleRemove(id) {
    const newList = newstories.filter((val) => val.id !== id);
 
    setNewstories(newList);
  }

  const newstory =newstories.filter((story) =>
  story.name.toLowerCase().includes(searchValue.toLowerCase()) );

  return(
    <div>
    
   <Searchbar  onSearch={handleOnSearch}/>
   <h4>Searching For:{searchValue}</h4>
   <List stories={newstory}  onRemove={handleRemove}></List>
   </div>
  );
}

export default App

 



